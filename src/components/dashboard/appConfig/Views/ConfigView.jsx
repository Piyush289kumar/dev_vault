import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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

          {/* Unique Name */}
          <div>
            <Label htmlFor="unique-name">Unique Name</Label>
            <Input id="unique-name" placeholder="Enter unique name" />
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
                <SelectItem value="top">Top</SelectItem>
                <SelectItem value="bottom">Bottom</SelectItem>
                <SelectItem value="side">Side</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Sort By */}
          <div>
            <Label htmlFor="sort-by">Sort By</Label>
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
          </div>

          {/* Group By */}
          <div>
            <Label htmlFor="group-by">Group By</Label>
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
          </div>

          {/* Group Aggregate */}
          <div>
            <Label htmlFor="group-aggregate">Group Aggregate</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Aggregation Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sum">Sum</SelectItem>
                <SelectItem value="count">Count</SelectItem>
                <SelectItem value="average">Average</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Main Image */}
          <div>
            <Label htmlFor="main-image">Main Image Column</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Image Column" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="profile_picture">Profile Picture</SelectItem>
                <SelectItem value="thumbnail">Thumbnail</SelectItem>
                <SelectItem value="banner">Banner</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Image Shape */}
          <div>
            <Label htmlFor="image-shape">Image Shape</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Image Shape" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="square">Square</SelectItem>
                <SelectItem value="circle">Circle</SelectItem>
                <SelectItem value="rounded">Rounded</SelectItem>
              </SelectContent>
            </Select>
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

          {/* Nested Table */}
          <div>
            <Label htmlFor="nested-table">Nested Table Column</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Nested Table Column" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="order_details">Order Details</SelectItem>
                <SelectItem value="user_history">User History</SelectItem>
                <SelectItem value="invoice_data">Invoice Data</SelectItem>
              </SelectContent>
            </Select>
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
