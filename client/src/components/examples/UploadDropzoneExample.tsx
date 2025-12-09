import { UploadDropzone } from "../UploadDropzone";
import { ThemeProvider } from "../ThemeProvider";

export default function UploadDropzoneExample() {
  return (
    <ThemeProvider>
      <div className="bg-card border border-border rounded-lg w-72">
        <UploadDropzone onFilesAdded={(files) => console.log("Files added:", files)} />
      </div>
    </ThemeProvider>
  );
}
