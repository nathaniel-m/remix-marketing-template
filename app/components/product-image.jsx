

export default function ProductImage({ ImageSrcDk, ImageSrcLt, ImageAlt }) {
  return (
    <div className="mx-auto mt-36 mb-24 space-y-12 lg:space-y-0 lg:grid">
      <div className="group relative md:mx-24">
        <div className="relative w-full rounded-xl md:rounded-3xl md:ml-2 p-2 border-2 border-500">

          <img
            className="hidden dark:block w-full h-full object-center object-cover rounded-xl md:rounded-3xl border-4 md:border-0 border-transparent"
            src={ImageSrcDk}
            alt={ImageAlt}
          />
          <img
            className="block dark:hidden w-full h-full object-center object-cover rounded-xl md:rounded-3xl border-4 md:border-9 border-white"
            src={ImageSrcLt}
            alt={ImageAlt}
          />
        </div>
      </div>
    </div>
  );
}
