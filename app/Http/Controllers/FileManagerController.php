<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\File;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Inertia\Inertia;

class FileManagerController extends Controller
{
    public function index()
    {
        $files = File::all();
        return Inertia::render('Files/Index', ['files' => $files]);
    }

    public function upload(Request $request)
    {
        try {
            $file = $request->file('file');

            $request->validate([
                'file' => 'required|mimes:pdf,zip,jpg',
            ]);

            $path = $file->store('files', 'public');

            File::create([
                'name' => $file->getClientOriginalName(),
                'path' => $path,
            ]);

            $files = File::all();

            return response()->json(['files' => $files]);
        } catch (\Exception $e) {
            return response()->json(['errors' => $e->errors()]);
        }
    }

    public function delete(File $file)
    {
        Storage::disk('public')->delete($file->path);
        $file->delete();

        $files = File::all();
        return response()->json(['files' => $files]);
    }

    public function download(File $file)
    {
        $filePath = Storage::disk('public')->path($file->path);

        return new BinaryFileResponse($filePath, 200, [
            'Content-Disposition' => 'attachment; filename=' . $file->name,
        ]);
    }

}
