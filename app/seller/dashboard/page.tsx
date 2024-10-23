"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Package,
  ShoppingCart,
  DollarSign,
  TrendingUp,
  Plus,
} from "lucide-react";
import { SellerHeader } from "@/components/seller/seller-header";
import { ProductsList } from "@/components/seller/products-list";
import { OrdersList } from "@/components/seller/orders-list";
import { AddProductForm } from "@/components/seller/add-product-form";

export default function SellerDashboard() {
  const [showAddProduct, setShowAddProduct] = useState(false);

  const stats = [
    {
      title: "Total Products",
      value: "124",
      icon: Package,
    },
    {
      title: "Total Orders",
      value: "845",
      icon: ShoppingCart,
    },
    {
      title: "Revenue",
      value: "$12,345",
      icon: DollarSign,
    },
    {
      title: "Growth",
      value: "+12.5%",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SellerHeader />
      <main className="container mx-auto py-6 px-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">Manage Your Store</h2>
            <Button onClick={() => setShowAddProduct(true)}>
              <Plus className="mr-2 h-4 w-4" /> Add Product
            </Button>
          </div>

          <Tabs defaultValue="products" className="space-y-4">
            <TabsList>
              <TabsTrigger value="products">Products</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
            </TabsList>
            <TabsContent value="products">
              <ProductsList />
            </TabsContent>
            <TabsContent value="orders">
              <OrdersList />
            </TabsContent>
          </Tabs>
        </div>

        {showAddProduct && (
          <AddProductForm onClose={() => setShowAddProduct(false)} />
        )}
      </main>
    </div>
  );
}