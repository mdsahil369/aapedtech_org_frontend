export default function BookImageUpload() {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Book Cover Image</label>

      <input
        type="file"
        className="
          block w-full
          text-xs text-primary
          file:mr-4
          file:rounded-md
          file:border-0
          file:bg-primary
          file:px-3
          file:py-1
          file:text-sm
          file:text-white
          hover:file:bg-primary/90
          cursor-pointer
        "
      />
    </div>
  );
}
