import React from "react";

const StudentNotesUpload = () => {
  return (
    <>
      <div className="relative border-2   flex items-center justify-center  py-5 px-4 sm:px-6 lg:px-8  relative items-center">
        <div className="sm:max-w-lg w-full p-5 bg-white rounded-xl z-10">
          <div className="text-center">
            <h2 className="mt-5 text-2xl font-bold text-gray-900">
              Notes Submit
            </h2>
          </div>
          <form className="mt-8 space-y-3" action="#" method="POST">
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold text-gray-500 tracking-wide">
                Attach Document
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-40 p-10 group text-center">
                  <div className="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                    <p className="pointer-none text-gray-500 ">
                      <span className="text-sm">Drag and drop</span> files here
                      <br /> or
                      {/* <a
                        href="/"
                        id=""
                        className="text-blue-600 hover:underline"
                      >
                        select a file
                      </a> */}
                      select a file from your computer
                    </p>
                  </div>
                  <input type="file" className="hidden" />
                </label>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              <span>File type: doc,pdf,types of images</span>
            </p>
            <div>
              <button
                type="submit"
                className=" w-full flex justify-center bg-blue-500 text-gray-100 p-4  rounded-full tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default StudentNotesUpload;
