import Image from "next/image";
import ReachOutSection from "@/app/components/ReachOutSection";

export default function OrderTranscriptPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-secondary py-4">
        <div className="mx-auto max-w-7xl w-full px-4">
          <h1 className="text-3xl md:text-4xl font-normal text-white text-center font-alice">
            Order A Transcript
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative bg-white py-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('/images/innerbg.jpg')",
            backgroundPosition: "left center",
          }}
        />

        <div className="relative mx-auto max-w-7xl w-full px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Profile */}
            <div className="lg:col-span-1">
              <div className="text-center lg:text-left">
                <Image
                  src="/images/Rella-Alex-Walker-00340-1.jpg"
                  alt="Rella (Alex) Walker"
                  width={300}
                  height={300}
                  className="mx-auto lg:mx-0 rounded-lg shadow-lg mb-6"
                />
                <div className="bg-primary text-white p-6 rounded-lg">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="text-xl font-bold">+1-855-443-2748</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Order Form */}
            <div className="lg:col-span-2">
              <div className="bg-tertiary p-8 rounded-lg">
                <div className="bg-primary text-white p-4 rounded-t-lg -m-8 mb-8">
                  <h2 className="text-xl font-bold text-center">
                    Get in touch by filling out the form below:
                  </h2>
                </div>

                <form className="space-y-6">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        Name of Proceeding: *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-black bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        ARE THESE BEING USED FOR APPEAL: *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-black"
                      >
                        <option value="">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        APPEAL NUMBER: *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white placeholder:text-black"
                        placeholder="Enter appeal number"
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        COURT LEVEL: *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-black"
                      >
                        <option value="">Select</option>
                        <option value="superior">Superior Court</option>
                        <option value="ontario">Ontario Court</option>
                        <option value="federal">Federal Court</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        COURT LOCATION: *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-black"
                      >
                        <option value="">Select</option>
                        <option value="toronto">Toronto</option>
                        <option value="ottawa">Ottawa</option>
                        <option value="hamilton">Hamilton</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-black mb-2">
                        TYPE OF RECORDING: *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-black"
                      >
                        <option value="">Select</option>
                        <option value="audio">Audio</option>
                        <option value="video">Video</option>
                        <option value="digital">Digital</option>
                      </select>
                    </div>
                  </div>

                  {/* Proceeding List Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                      PROCEEDING LIST
                    </h3>
                    <div className="border border-gray-300 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-semibold">
                          PROCEEDING DETAILS 1
                        </span>
                        <button
                          type="button"
                          className="text-red-500 hover:text-red-700"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-black mb-2">
                            DATE OF PROCEEDING: *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="dd/mm/yyyy"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white placeholder:text-black"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-black mb-2">
                            PRESIDING OFFICIAL:
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white placeholder:text-black"
                            placeholder="Enter official name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-black mb-2">
                            COURTROOM
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white placeholder:text-black"
                            placeholder="Enter courtroom"
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="mt-4 bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                    >
                      Add More +
                    </button>
                  </div>

                  {/* Content to be Transcribed */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                      CONTENT TO BE TRANSCRIBED: *
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-3 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded bg-white"
                        />
                        <span className="text-black">Complete Proceeding</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-3 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded bg-white"
                        />
                        <span className="text-black">
                          Excerpt of Proceeding - Describe below
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-3 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded bg-white"
                        />
                        <span className="text-black">
                          Evidence of Witnesses - Describe below
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-3 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded bg-white"
                        />
                        <span className="text-black">Reasons for Judgment</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-3 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded bg-white"
                        />
                        <span className="text-black">
                          Other - Describe below
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Number of Hard Copies */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-4">
                      NUMBER OF HARD COPIES REQUESTED: *
                    </h3>
                    <select
                      required
                      className="w-full max-w-xs px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white text-black"
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <p className="text-sm text-gray-600 mt-2">
                      Printed hard copies are $0.80 per page in addition to the
                      base rate.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
                    >
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ReachOutSection />
    </div>
  );
}
