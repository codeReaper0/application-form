import React, {useState} from "react";
import upload from "../assets/icons/uploadIcon.png";
import {CancelIcon} from "../assets/svg/icons";

export default function Upload() {
  const [file, setFile] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

  function uploadImage(e: any) {
    setLoading(true);
    const uploadedFile = e.target.files[0];
    // console.log(e.target);

    if (uploadedFile) {
      const fileSize = uploadedFile.size / 1024 / 1024; //To convert to MB
      if (fileSize > 1) {
        setErrMsg("File size must be less than 1MB.");
        e.target.value = null;
      } else {
        setFile(URL.createObjectURL(uploadedFile));
        setErrMsg("");
      }
    }
  }

  function deleteUploadedImg() {
    setFile("");
  }
  return (
    <fieldset className="w-[595px] rounded-[20px] overflow-hidden shadow-[3px_3px_14px_0px_rgba(190,190,190,0.30)]">
      <p className="p-4 bg-[#D0F7FA] w-full text-lg font-semibold">
        Upload cover image
      </p>
      {file ? (
        <>
          <div className="h-[330px] flex flex-col items-center justify-center gap-2 overflow-hidden">
            <img
              src={file}
              alt="uploaded image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="py-3 px-6 bg-white w-full text-xl font-semibold z-30">
            <button
              onClick={deleteUploadedImg}
              className="flex gap-4 items-center"
              aria-label="Delete & re-upload"
            >
              <CancelIcon />
              <span className="text-[#A80000] text-[15px] font-semibold">
                Delete & re-upload
              </span>
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="h-[330px] flex flex-col items-center justify-center gap-2 relative">
            <img src={upload} alt="menu icon" width={25} height={25} />
            <p className="text-sm font-semibold">Upload cover image</p>
            <p className="text-sm font-medium text-[#979797]">
              16:9 ratio is recommended. Max image size 1mb
            </p>
            <input
              type="file"
              name="image"
              id="imageInput"
              className="absolute inset-0 opacity-0 cursor-pointer z-20"
              accept=".jpg, .jpeg, .png"
              onChange={uploadImage}
            />
          </div>
          <p className="text-red-600">{errMsg}</p>
        </>
      )}
    </fieldset>
  );
}
