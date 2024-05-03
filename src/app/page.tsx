"use client";
import { useGetDataQuery } from "@/app/lib/services/dataApi";

export default function Home() {
  const { data, error, isLoading, isFetching } = useGetDataQuery(null);
  if (isFetching || isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>HomePage</h1>
      <h1>data</h1>
      {data?.data.markets}
    </div>
  );
}
