// FileUpload.jsx
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useEffect, useState } from 'react';
import { storage } from '../configs/firebase';

const Fileuploader = ({ imageUrl, setImageUrl, setLoading }) => {
  const [file, setFile] = useState(null);
  // const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    setLoading(true);
    const storageRef = ref(storage, `products/${file.name}`);
    try {
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      setImageUrl(downloadURL);
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setLoading(false);
    }
  };

  /*eslint-disable*/
  useEffect(() => {
    if (file) {
      handleUpload();
    }
  }, [file]);
  /*eslint-enable*/

  return (
    <div>
      <label className="block mb-2 text-sm font-medium border-none text-gray-900 dark:text-white">
        Upload file
      </label>
      <input
        className="block w-full text-sm outline-none text-gray-900 border border-primary rounded-lg cursor-pointer bg-gray-50 "
        type="file"
        onChange={handleFileChange}
        disabled={imageUrl}
        // multiple
      />
      {/* <button
        onClick={handleUpload}
        className="border border-secondary px-3 py-2 rounded-md text-primary hover:bg-secondary hover:text-white font-semibold">
        Upload file
      </button> */}
      {imageUrl && (
        <div className="mt-4 w-48 h-48">
          <img
            src={imageUrl}
            alt="Uploaded Image"
          />
        </div>
      )}
    </div>
  );
};

export default Fileuploader;
