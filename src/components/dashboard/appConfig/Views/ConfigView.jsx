import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

export default function ConfigView() {
  return (
    <Card className="mx-auto p-6 shadow-lg">
      <CardContent className="space-y-6">
        <h2 className="text-lg font-semibold">Config View</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* View Name */}
          <div>
            <Label htmlFor="view-name">View Name</Label>
            <Input id="view-name" placeholder="Enter view name" />
          </div>

          {/* Data Source */}
          <div>
            <Label htmlFor="data-source">Data Source</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Data Source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="users">Users</SelectItem>
                <SelectItem value="orders">Orders</SelectItem>
                <SelectItem value="products">Products</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* View Type */}
          <div>
            <Label htmlFor="view-type">View Type</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select View Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="table">Table</SelectItem>
                <SelectItem value="list">List</SelectItem>
                <SelectItem value="card">Card</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Position */}
          <div>
            <Label htmlFor="position">Position</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Position" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="First">First</SelectItem>
                <SelectItem value="Last">Last</SelectItem>
                <SelectItem value="Middle">Middle</SelectItem>
                <SelectItem value="Next">Next</SelectItem>
                <SelectItem value="Later">Later</SelectItem>
                <SelectItem value="Manu">Manu</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Sort By */}
          <div>
            <Label htmlFor="sort-by">Sort By</Label>
            <div className="flex space-x-2">
              {/* Sort Column Dropdown */}
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Sort Column" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="date">Date</SelectItem>
                  <SelectItem value="status">Status</SelectItem>
                </SelectContent>
              </Select>

              {/* Sort Order Dropdown (Asc/Desc) - Default is Ascending */}
              <Select defaultValue="asc">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asc">Ascending</SelectItem>
                  <SelectItem value="desc">Descending</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Group By */}
          <div>
            <Label htmlFor="group-by">Group By</Label>
            <div className="flex space-x-2">
              {/* Group Column Dropdown */}
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Group Column" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="category">Category</SelectItem>
                  <SelectItem value="status">Status</SelectItem>
                  <SelectItem value="location">Location</SelectItem>
                </SelectContent>
              </Select>

              {/* Group Order Dropdown (Asc/Desc) - Default is Ascending */}
              <Select defaultValue="asc">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asc">Ascending</SelectItem>
                  <SelectItem value="desc">Descending</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Primary Header */}
          <div>
            <Label htmlFor="primary-header">Primary Header</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Primary Header" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="title">Title</SelectItem>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="id">ID</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Secondary Header */}
          <div>
            <Label htmlFor="secondary-header">Secondary Header</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Secondary Header" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="subtitle">Subtitle</SelectItem>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="phone">Phone</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Summary Column */}
          <div>
            <Label htmlFor="summary-column">Summary Column</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Summary Column" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="status">Status</SelectItem>
                <SelectItem value="price">Price</SelectItem>
                <SelectItem value="count">Count</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* Actions */}
          <div>
            <Label htmlFor="actions">Actions</Label>
            <div className="grid grid-cols-2 gap-4 p-2">
              {/* Left Column */}
              <div className="flex items-center space-x-2">
                <Checkbox id="edit" />
                <Label htmlFor="edit">Edit</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="delete" />
                <Label htmlFor="delete">Delete</Label>
              </div>

              {/* Right Column */}
              <div className="flex items-center space-x-2">
                <Checkbox id="view" />
                <Label htmlFor="view">View</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="duplicate" />
                <Label htmlFor="duplicate">Duplicate</Label>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="col-span-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter description" />
          </div>

          {/* Active Status */}
          <div className="flex items-center space-x-2">
            <Switch id="is-active" />
            <Label htmlFor="is-active">Is Active</Label>
          </div>

          {/* Read-Only */}
          <div className="flex items-center space-x-2">
            <Checkbox id="read-only" />
            <Label htmlFor="read-only">Read Only</Label>
          </div>
        </div>

        {/* Submit Button */}
        <Button className="w-full">Save View</Button>
      </CardContent>
    </Card>
  );
}
