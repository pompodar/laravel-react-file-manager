import { useState, useRef } from 'react';
import { usePage } from '@inertiajs/react';
import Header from './Header';
import FileList from './FileList';

const App = () => {
    const { files: initialFiles } = usePage().props;
    const [files, setFiles] = useState(initialFiles);
    const [message, setMessage] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    
    const handleDownload = (fileId) => {
        window.open(`/api/files/${fileId}/download`, '_blank');
    };

    return (
        <div style={{ margin: '0', fontSize: '14px', fontFamily: 'Roboto', boxSizing: 'border-box' }}>
            <Header message={message} setMessage={setMessage} setFiles={setFiles} selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
            <FileList files={files} handleDownload={handleDownload} selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
        </div>
    );
};

export default App;
