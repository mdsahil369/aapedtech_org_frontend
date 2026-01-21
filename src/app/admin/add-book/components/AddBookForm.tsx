import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import BookImageUpload from "./BookImageUpload";

export default function AddBookForm({ categories }: { categories: any[] }) {
  return (
    <form className="space-y-6">
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input placeholder="Book Name *" />
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Categories (Select multiple)" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat.id} value={cat.id}>
                {cat.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Input placeholder="Author *" />
        <Input placeholder="Publisher *" />

        <Input placeholder="Total Amount *" type="number" />
        <Input placeholder="Price *" type="number" />

        <Input placeholder="Discount" type="number" />
      </div>

      {/* Image Upload */}
      <BookImageUpload />

      {/* Description */}
      <Textarea placeholder="Book description" className="min-h-[120px]" />

      {/* Action */}
      <div className="flex justify-end">
        <Button className="bg-primary text-white shadow-lg shadow-cyan-500/50">
          Create Book
        </Button>
      </div>
    </form>
  );
}
