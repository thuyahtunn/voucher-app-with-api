import React from "react";

const NotFoundPage = () => {
  return (
    <section className="bg-neutral-50  flex justify-center items-center h-screen">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-gray-700 dark:text-neutral-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-600 md:text-4xl dark:text-white">
            Something's missing.
          </p>
          <p className="mb-4 text-lg font-medium text-gray-500 ">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{"{"}" "{"}"}
          </p>
          <a
            href="/dashboard"
            className="inline-flex text-white bg-neutral-600  font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
