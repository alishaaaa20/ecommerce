"use client";
import { Button } from "@/components/ui/button";
import { LucideMinus, LucidePlus, LucideTrash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartRow = ({
  product,
  onIncrease,
  onDecrease,
  onDelete,
}: {
  product: any;
  onIncrease: any;
  onDecrease: any;
  onDelete: any;
}) => (
  <tr className="border-b border-gray-300">
    <td className="py-4">
      <div className="flex items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-16 h-16 object-cover rounded-md"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-sm text-gray-600">Size: {product.size}</p>
        </div>
      </div>
    </td>
    <td className="py-4">Rs. {product.price.toFixed(2)}</td>
    <td className="py-4">
      <div className="flex items-center justify-center space-x-2">
        <button onClick={() => onDecrease(product)} className="px-2">
          <LucideMinus className="w-4 h-4" />
        </button>
        <input
          type="number"
          className="border border-gray-300 rounded-md px-2 py-1 w-16 text-center no-arrows"
          value={product.quantity}
          readOnly
        />
        <button onClick={() => onIncrease(product)} className="px-2">
          <LucidePlus className="w-4 h-4" />
        </button>
      </div>
    </td>
    <td className="py-4">
      Rs. {(product.price * product.quantity).toFixed(2)}
    </td>
    <td className="py-4 text-right">
      <button onClick={() => onDelete(product)} className="px-2">
        <LucideTrash2 className="text-red-600" size={20} />
      </button>
    </td>
  </tr>
);

export default function CartPage() {
  const [products, setProducts] = React.useState([
    {
      image: "/feature/anarkali1.svg",
      name: "Anarkali Dress Material",
      size: "M",
      price: 99.0,
      quantity: 1,
    },
    {
      image: "/bestselling/sari1.svg",
      name: "Saree Dress Material",
      size: "L",
      price: 999.0,
      quantity: 1,
    },
  ]);

  const handleIncrease = (product: any) => {
    setProducts(
      products.map((p) =>
        p.name === product.name ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };

  const handleDecrease = (product: any) => {
    if (product.quantity > 1) {
      setProducts(
        products.map((p) =>
          p.name === product.name ? { ...p, quantity: p.quantity - 1 } : p
        )
      );
    }
  };

  const handleDelete = (product: any) => {
    setProducts(products.filter((p) => p.name !== product.name));
  };

  const subtotal = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  const shipping = 99.0;
  const total = subtotal + shipping;

  return (
    <section className="container py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mb-8">Cart</h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <table className="w-full mb-8 min-w-[600px]">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-2">Product</th>
                <th className="text-left py-2">Price</th>
                <th className="py-2">Quantity</th>
                <th className="text-left py-2">Total</th>
                <th className="py-2"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <CartRow
                  key={index}
                  product={product}
                  onIncrease={handleIncrease}
                  onDecrease={handleDecrease}
                  onDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="p-4 bg-white rounded-md w-full lg:w-1/3 lg:ml-auto">
        <h3 className="text-lg font-semibold mb-4">Cart Summary</h3>
        <div className="flex justify-between mb-2">
          <p className="text-gray-600">Subtotal ({products.length} items)</p>
          <p className="text-gray-600">Rs. {subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-gray-600">Shipping</p>
          <p className="text-gray-600">Rs. {shipping.toFixed(2)}</p>
        </div>
        <div className="flex justify-between mt-4">
          <h3 className="text-lg font-semibold">Total</h3>
          <h3 className="text-lg font-semibold">Rs. {total.toFixed(2)}</h3>
        </div>
        <hr className="my-4" />

        <div className="flex justify-end">
          <Link href="/checkout">
            <Button className="bg-primary text-white px-4 py-2 rounded-md">
              Proceed to Checkout
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
