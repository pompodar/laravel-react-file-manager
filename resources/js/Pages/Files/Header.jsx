import React, { useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useState, useRef } from 'react';

const Header = ({ selectedFile, setSelectedFile, message, setMessage, setFiles }) => {
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    useEffect(() => {
        if (file) {
            handleUpload();
        }
    }, [file])

    const handleUpload = () => {
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            fetch('/api/files/upload', {
                method: 'POST',
                body: formData,
            })
                .then(response => response.json())
                .then(data => {
                    if (!data.errors) {
                        setFiles(data.files);
                        setFile(null);
                        setMessage("File uploaded successfully");
                        // Reset file input
                        fileInputRef.current.value = null;
                    } else {
                        setMessage(data.errors.file || 'Unknown error occurred during file upload.');
                    }
                })
                .catch(error => {
                    console.error('Error during file upload:', error);
                    setMessage('An error occurred while processing the request. Please try again.');
                });
        } else {
            setMessage("File is not selected");
        }
    };

    const handleDelete = () => {
        if (selectedFile) {
            fetch(`/api/files/${selectedFile}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(data => {
                    setFiles(data.files);
                    setMessage("File deleted successfully");
                    setSelectedFile(null)
                })
                .catch(error => {
                    console.log(error);
                    setMessage('An error occurred while deleting the file. Please try again.');
                });
        } else {
            setMessage('Please select a file.');
        }
    };

    return (
        <header style={{ maxWidth: '545px', height: '38px', margin: '0 auto', padding: '20px', paddingBottom: '0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            {message && 
            <div style={{ position: 'absolute', top: '20px', left: '40px', background: 'white', padding: '10px', zIndex: '10', borderRadius: '6px', boxShadow: '1px 1px 5px 0px rgba(0,0,0,0.75)' }} className="messages">
                <p style={{ color: 'red' }}>{message}</p>
            </div>
            }
            <div style={{ width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Checkbox />
            </div>
            <div style={{ width: '140px', height: '28px', display: 'flex', justifyContent: 'space-between' }}>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
                <IconButton
                    onClick={handleClick}
                    style={{ borderRadius: '0px' }} >
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_56_4828)">
                            <path d="M11.1607 10.8462L13.375 8.63188V15.8753C13.375 16.0411 13.4409 16.2 13.5581 16.3172C13.6753 16.4345 13.8343 16.5003 14 16.5003C14.1658 16.5003 14.3247 16.4345 14.442 16.3172C14.5592 16.2 14.625 16.0411 14.625 15.8753V8.63188L16.8393 10.8462C16.8974 10.9043 16.9663 10.9503 17.0421 10.9817C17.1179 11.0131 17.1992 11.0293 17.2813 11.0293C17.3634 11.0293 17.4446 11.0131 17.5205 10.9817C17.5963 10.9503 17.6652 10.9042 17.7232 10.8462C17.7813 10.7882 17.8273 10.7192 17.8587 10.6434C17.8901 10.5676 17.9063 10.4863 17.9063 10.4042C17.9063 10.3222 17.8901 10.2409 17.8587 10.1651C17.8273 10.0892 17.7812 10.0203 17.7232 9.96229L14.4419 6.68104C14.3247 6.56387 14.1658 6.49805 14 6.49805C13.8343 6.49805 13.6753 6.56387 13.5581 6.68104L10.2768 9.96229C10.2188 10.0203 10.1727 10.0892 10.1413 10.1651C10.1099 10.2409 10.0938 10.3222 10.0938 10.4042C10.0937 10.4863 10.1099 10.5676 10.1413 10.6434C10.1727 10.7192 10.2188 10.7882 10.2768 10.8462C10.3348 10.9042 10.4037 10.9503 10.4796 10.9817C10.5554 11.0131 10.6367 11.0293 10.7187 11.0293C10.8008 11.0293 10.8821 11.0131 10.9579 10.9817C11.0338 10.9503 11.1027 10.9043 11.1607 10.8462Z" fill="black" fill-opacity="0.56" />
                            <path d="M21.5 14C21.3342 14 21.1753 14.0659 21.0581 14.1831C20.9409 14.3003 20.875 14.4592 20.875 14.625V20.25H7.125V14.625C7.125 14.4592 7.05915 14.3003 6.94194 14.1831C6.82473 14.0658 6.66576 14 6.5 14C6.33424 14 6.17527 14.0658 6.05806 14.1831C5.94085 14.3003 5.875 14.4592 5.875 14.625V20.25C5.87538 20.5814 6.0072 20.8991 6.24154 21.1335C6.47587 21.3678 6.7936 21.4996 7.125 21.5H20.875C21.2064 21.4996 21.5241 21.3678 21.7585 21.1335C21.9928 20.8991 22.1246 20.5814 22.125 20.25V14.625C22.125 14.4592 22.0591 14.3003 21.9419 14.1831C21.8247 14.0659 21.6658 14 21.5 14Z" fill="black" fill-opacity="0.56" />
                        </g>
                        <defs>
                            <clipPath id="clip0_56_4828">
                                <rect width="20" height="20" fill="white" transform="translate(4 4)" />
                            </clipPath>
                        </defs>
                    </svg>
                </IconButton>
                <IconButton
                    onClick={handleDelete}
                    style={{ borderRadius: '0px' }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.875 4.37695L3.125 4.37696" stroke="black" stroke-opacity="0.56" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.125 8.12695V13.127" stroke="black" stroke-opacity="0.56" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.875 8.12695V13.127" stroke="black" stroke-opacity="0.56" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15.625 4.37696V16.252C15.625 16.4177 15.5592 16.5767 15.4419 16.6939C15.3247 16.8111 15.1658 16.877 15 16.877H5C4.83424 16.877 4.67527 16.8111 4.55806 16.6939C4.44085 16.5767 4.375 16.4177 4.375 16.252V4.37695" stroke="black" stroke-opacity="0.56" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.125 4.37695V3.12695C13.125 2.79543 12.9933 2.47749 12.7589 2.24307C12.5245 2.00865 12.2065 1.87695 11.875 1.87695H8.125C7.79348 1.87695 7.47554 2.00865 7.24112 2.24307C7.0067 2.47749 6.875 2.79543 6.875 3.12695V4.37695" stroke="black" stroke-opacity="0.56" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </IconButton>
                <IconButton style={{ borderRadius: '0px' }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.55808 12.3173C9.6753 12.4345 9.83426 12.5003 10 12.5003C10.1658 12.5003 10.3247 12.4345 10.4419 12.3173L13.7232 9.03606C13.7812 8.97802 13.8273 8.90912 13.8587 8.83329C13.8901 8.75746 13.9063 8.67619 13.9063 8.59411C13.9063 8.51204 13.8901 8.43076 13.8587 8.35493C13.8273 8.2791 13.7813 8.21019 13.7232 8.15215C13.6652 8.09411 13.5963 8.04807 13.5205 8.01666C13.4446 7.98525 13.3634 7.96907 13.2813 7.96907C13.1992 7.96907 13.1179 7.98523 13.0421 8.01664C12.9663 8.04804 12.8974 8.09408 12.8393 8.15211L10.625 10.3665V3.12305C10.625 2.95729 10.5592 2.79832 10.442 2.68111C10.3247 2.5639 10.1658 2.49805 10 2.49805C9.83425 2.49805 9.67528 2.5639 9.55807 2.68111C9.44086 2.79832 9.37501 2.95729 9.37501 3.12305V10.3665L7.1607 8.15211C7.10266 8.09408 7.03375 8.04804 6.95792 8.01664C6.88209 7.98523 6.80082 7.96907 6.71874 7.96907C6.55297 7.96908 6.394 8.03493 6.27679 8.15215C6.15959 8.26937 6.09374 8.42835 6.09375 8.59411C6.09376 8.75988 6.15961 8.91885 6.27683 9.03606L9.55808 12.3173Z" fill="black" fill-opacity="0.56" />
                        <path d="M17.5 10C17.3342 10 17.1753 10.0659 17.0581 10.1831C16.9409 10.3003 16.875 10.4592 16.875 10.625V16.25H3.125V10.625C3.125 10.4592 3.05915 10.3003 2.94194 10.1831C2.82473 10.0658 2.66576 10 2.5 10C2.33424 10 2.17527 10.0658 2.05806 10.1831C1.94085 10.3003 1.875 10.4592 1.875 10.625V16.25C1.87538 16.5814 2.0072 16.8991 2.24154 17.1335C2.47587 17.3678 2.7936 17.4996 3.125 17.5H16.875C17.2064 17.4996 17.5241 17.3678 17.7585 17.1335C17.9928 16.8991 18.1246 16.5814 18.125 16.25V10.625C18.125 10.4592 18.0591 10.3003 17.9419 10.1831C17.8247 10.0659 17.6658 10 17.5 10V10Z" fill="black" fill-opacity="0.56" />
                    </svg>
                </IconButton>
            </div>
            <div style={{ width: '28px', height: '28px', marginRight: '15px', position: 'relative', top: '-10px' }}>
                <IconButton style={{ display: 'flex' }}>
                    <CloseIcon />
                </IconButton>
            </div>
        </header>
    );
};

export default Header;