import CreateBroadcastModal from "./components/CreateBroadcastModal";
import UploadRecordedClassModal from "./components/UploadRecordedClassModal";

export default async function ClassesPage() {
  return (
    <div className="space-y-8 px-6 md:px-25 py-12 bg-muted h-full">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-foreground">
          Class Management
        </h1>
        <p className="text-sm text-muted-foreground">
          Manage and monitor your class sessions
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <CreateBroadcastModal />
        <UploadRecordedClassModal />
      </div>

      {/* Empty State */}
      <div className="rounded-xl bg-card border border-border py-20 text-center">
        <div className="mx-auto w-fit">
          <div className="mb-3 text-4xl">📅</div>
          <p className="font-medium text-foreground">No classes found</p>
          <p className="text-sm text-muted-foreground">
            Try adjusting your search or filter criteria
          </p>
        </div>
      </div>
    </div>
  );
}
