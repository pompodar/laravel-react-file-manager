import FileCard from './FileCard';

const FileList = ({ selectedFile, setSelectedFile, handleDownload, files }) => {
    return (
        <div style={{ maxWidth: '565px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', margin: '0 auto', marginTop: '20px', padding: '20px', }}>
            {files.map(file => (
                <FileCard selectedFile={selectedFile} setSelectedFile={setSelectedFile} handleDownload={handleDownload} fileId={file.id} key={file.id} name={`Name of document ${file.name}`} />
            ))}

        </div>
    );
};

export default FileList;