"use client";
import React from "react";

const ItemModal = ({
  heading,
  selectedCategoryDetails,
  closeModal,
  featureHeading
}) => {

  const {title, itemPara, features, imageLocation} = selectedCategoryDetails
  return (
    <>
      <div>
        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
            {heading}
          </h3>
          <button
            onClick={closeModal}
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="default-modal"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div>
          <a
            href="#"
            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              class="rounded-t-lg md:rounded-none md:rounded-s-lg m-10"
              src={imageLocation}
              alt=""
              width={"80%"}
              height={"80%"}
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>
              {itemPara.map((para) => {
                return (
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {para}
                  </p>
                );
              })}
              {featureHeading && (
                <>
                  <h6 class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                    {featureHeading}
                  </h6>
                  <ul class="list-disc ml-4">
                    {features.map((feature) => {
                      return <li>{feature}</li>;
                    })}
                  </ul>
                </>
              )}
              <button
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
                class="block mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Connect with us for more details
              </button>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default ItemModal;
