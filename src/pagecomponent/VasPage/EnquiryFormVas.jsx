import React from 'react';

const EnquiryForm = () => {
  const x = document;
  return (
    <div className="bg-[#4A3587] md:pl-20 p-4">
      <div className="grid md:grid-cols-2 gap-8 py-16">
        {/* Text Grid */}
        <div className="p-8 text-left">
          <h2 className="text-3xl font-bold text-primaryWhite mb-4">Enquire</h2>
          <p className="text-primaryWhite">
            Please fill in the requirements to the best of your knowledge. Our
            partnerships team will get in touch with you to further understand
            your needs.
          </p>
        </div>

        {/* Form Grid */}
        <div className="bg-[white] p-8 rounded-lg mx-auto max-w-md max-h-[600px] overflow-y-auto">
          <form>
            <div className="mb-4 flex flex-col md:flex-row md:space-x-4 gap-2">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full border border-gray-300 p-2 rounded bg-[#F5F5F5] border-none"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Contact Person name"
                  className="w-full border border-gray-300 p-2 rounded bg-[#F5F5F5] border-none"
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col md:flex-row md:space-x-4">
              <select className="border border-gray-300 p-2 rounded bg-[#F5F5F5] border-none mb-2 md:mb-0">
                <option value="+91">+91</option>
              </select>
              <input
                type="text"
                placeholder="Phone number"
                className="w-full md:w-[30%] border border-gray-300 p-2 rounded bg-[#F5F5F5] border-none mb-2 md:mb-0"
              />
              <input
                type="email"
                placeholder="Email id"
                className="flex-1 border border-gray-300 p-2 rounded bg-[#F5F5F5] border-none"
              />
            </div>
            <div className="mb-4 flex flex-col md:flex-row md:space-x-4 gap-2">
              <div className="flex-1">
                <select className="w-full border border-gray-300 p-2 rounded bg-[#F5F5F5] border-none">
                  <option>Product Category</option>
                </select>
              </div>
              <div className="flex-1">
                <select className="w-full border border-gray-300 p-2 rounded bg-[#F5F5F5] border-none">
                  <option>Interested Service</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Requirement Details"
                className="w-full border border-gray-300 p-2 rounded bg-[#F5F5F5] border-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="file"
                className="w-full border border-gray-300 p-2 rounded bg-[#F5F5F5] border-none"
              />
            </div>
            <button
              type="submit"
              className="bg-[#4A3587] text-primaryWhite px-4 py-2 rounded-3xl urbanist border border-none w-full md:w-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
