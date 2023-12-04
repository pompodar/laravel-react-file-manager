import Button from '@material-ui/core/Button';
import { Card, CardContent } from '@material-ui/core';


const FileCard = ({ selectedFile, setSelectedFile, handleDownload, fileId, name }) => {
    return (
        <Card
            onClick={() => { setSelectedFile(fileId) }}
            variant="outlined" style={{ minHeight: '202px', width: '155px', cursor: 'pointer' }}>
            <CardContent className={`card ${selectedFile === fileId ? 'active' : ''}`} style={{ padding: '0 16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className="card-top-buttons" style={{ margin: '8px auto', display: 'flex', height: '32px', width: '123px', justifyContent: 'space-between', visibility: 'hidden', opacity: '0', transition: 'opacity 0.5s ease-in-out' }}>
                        <Button
                            style={{ border: 'none', backgroundColor: 'inherit', minWidth: 'auto', position: 'relative', right: '6px' }}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.7951 19.8749L8.62508 15.7049L7.20508 17.1149L12.7951 22.7049L24.7951 10.7049L23.3851 9.29492L12.7951 19.8749Z" fill="#76DB74" />
                            </svg>
                        </Button>
                        <Button style={{ border: 'none', backgroundColor: 'inherit', minWidth: 'auto', position: 'relative', left: '6px' }}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23 10.41L21.59 9L16 14.59L10.41 9L9 10.41L14.59 16L9 21.59L10.41 23L16 17.41L21.59 23L23 21.59L17.41 16L23 10.41Z" fill="#F0757A" />
                            </svg>
                        </Button>
                    </div>
                    <div className="icon" style={{ margin: 'auto', marginTop: '23px' }}>
                        <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" width="52" height="52" rx="4" fill="#4CAF50" />
                            <path d="M33.25 17H31V16.25C31 16.0511 30.921 15.8603 30.7803 15.7197C30.6397 15.579 30.4489 15.5 30.25 15.5H22.75C22.5511 15.5 22.3603 15.579 22.2197 15.7197C22.079 15.8603 22 16.0511 22 16.25V17H19.75C19.3523 17.0005 18.971 17.1586 18.6898 17.4398C18.4086 17.721 18.2505 18.1023 18.25 18.5V34.25C18.2505 34.6477 18.4086 35.029 18.6898 35.3102C18.971 35.5914 19.3523 35.7495 19.75 35.75H33.25C33.6477 35.7495 34.029 35.5914 34.3102 35.3102C34.5914 35.029 34.7495 34.6477 34.75 34.25V18.5C34.7495 18.1023 34.5914 17.721 34.3102 17.4398C34.029 17.1586 33.6477 17.0005 33.25 17ZM23.5 17H29.5V19.25H23.5V17ZM29.5 29H23.5C23.3011 29 23.1103 28.921 22.9697 28.7803C22.829 28.6397 22.75 28.4489 22.75 28.25C22.75 28.0511 22.829 27.8603 22.9697 27.7197C23.1103 27.579 23.3011 27.5 23.5 27.5H29.5C29.6989 27.5 29.8897 27.579 30.0303 27.7197C30.171 27.8603 30.25 28.0511 30.25 28.25C30.25 28.4489 30.171 28.6397 30.0303 28.7803C29.8897 28.921 29.6989 29 29.5 29ZM29.5 26H23.5C23.3011 26 23.1103 25.921 22.9697 25.7803C22.829 25.6397 22.75 25.4489 22.75 25.25C22.75 25.0511 22.829 24.8603 22.9697 24.7197C23.1103 24.579 23.3011 24.5 23.5 24.5H29.5C29.6989 24.5 29.8897 24.579 30.0303 24.7197C30.171 24.8603 30.25 25.0511 30.25 25.25C30.25 25.4489 30.171 25.6397 30.0303 25.7803C29.8897 25.921 29.6989 26 29.5 26Z" fill="white" />
                        </svg>
                    </div>
                    <p style={{ width: '123px', margin: '10px auto 0', lineHeight: '144%', wordBreak: 'break-word' }}>{name}</p>
                    <div class='card-download-button' style={{ display: 'flex', width: '32px', height: '32px', margin: '10px auto', border: 'none', justifyContent: 'center', visibility: 'hidden', opacity: '0', transition: 'opacity 1.5s ease-in-out' }}>
                        <Button
                            onClick={() => handleDownload(fileId)}
                            style={{ border: 'none', backgroundColor: 'inherit' }}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.55808 12.3173C9.6753 12.4345 9.83426 12.5003 10 12.5003C10.1658 12.5003 10.3247 12.4345 10.4419 12.3173L13.7232 9.03606C13.7812 8.97802 13.8273 8.90912 13.8587 8.83329C13.8901 8.75746 13.9063 8.67619 13.9063 8.59411C13.9063 8.51204 13.8901 8.43076 13.8587 8.35493C13.8273 8.2791 13.7813 8.21019 13.7232 8.15215C13.6652 8.09411 13.5963 8.04807 13.5205 8.01666C13.4446 7.98525 13.3634 7.96907 13.2813 7.96907C13.1992 7.96907 13.1179 7.98523 13.0421 8.01664C12.9663 8.04804 12.8974 8.09408 12.8393 8.15211L10.625 10.3665V3.12305C10.625 2.95729 10.5592 2.79832 10.442 2.68111C10.3247 2.5639 10.1658 2.49805 10 2.49805C9.83425 2.49805 9.67528 2.5639 9.55807 2.68111C9.44086 2.79832 9.37501 2.95729 9.37501 3.12305V10.3665L7.1607 8.15211C7.10266 8.09408 7.03375 8.04804 6.95792 8.01664C6.88209 7.98523 6.80082 7.96907 6.71874 7.96907C6.55297 7.96908 6.394 8.03493 6.27679 8.15215C6.15959 8.26937 6.09374 8.42835 6.09375 8.59411C6.09376 8.75988 6.15961 8.91885 6.27683 9.03606L9.55808 12.3173Z" fill="black" fill-opacity="0.56" />
                                <path d="M17.5 10C17.3342 10 17.1753 10.0659 17.0581 10.1831C16.9409 10.3003 16.875 10.4592 16.875 10.625V16.25H3.125V10.625C3.125 10.4592 3.05915 10.3003 2.94194 10.1831C2.82473 10.0658 2.66576 10 2.5 10C2.33424 10 2.17527 10.0658 2.05806 10.1831C1.94085 10.3003 1.875 10.4592 1.875 10.625V16.25C1.87538 16.5814 2.0072 16.8991 2.24154 17.1335C2.47587 17.3678 2.7936 17.4996 3.125 17.5H16.875C17.2064 17.4996 17.5241 17.3678 17.7585 17.1335C17.9928 16.8991 18.1246 16.5814 18.125 16.25V10.625C18.125 10.4592 18.0591 10.3003 17.9419 10.1831C17.8247 10.0659 17.6658 10 17.5 10V10Z" fill="black" fill-opacity="0.56" />
                            </svg>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default FileCard;