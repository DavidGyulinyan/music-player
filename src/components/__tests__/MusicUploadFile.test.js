import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import MusicUploadForm from '../MusicUploadForm/MusicUploadForm'

describe('MusicUploadFile', () => {
    it('renders file upload button and upload button', () => {
        render(<MusicUploadForm />);
        const fileUploadButton = screen.getByLabelText('file-upload');
        const uploadButton = screen.getByText('Upload');
        expect(fileUploadButton).toBeInTheDocument();
        expect(uploadButton).toBeInTheDocument();
    });

    it('displays error message when trying to upload without selecting a file', async () => {
        render(<MusicUploadForm />);
        const uploadButton = screen.getByText('Upload');
        fireEvent.click(uploadButton);
        const errorMessage = await screen.findByText('Please select a file');
        expect(errorMessage).toBeInTheDocument();
    });

    it('handles file selection and upload', async () => {
        render(<MusicUploadForm />);
        const file = new File(['dummy content'], 'test.mp3', { type: 'audio/mpeg' });
        const fileUploadInput = screen.getByLabelText('file-upload');
        fireEvent.change(fileUploadInput, { target: { files: [file] } });
        const uploadButton = screen.getByText('Upload');
        fireEvent.click(uploadButton);
        const uploadingMessage = await screen.findByText('Uploading...');
        expect(uploadingMessage).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.queryByText('Uploading...')).toBeNull();
        });
    });
});
