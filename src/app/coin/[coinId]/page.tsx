export default function Coin({ params }: { params: { coinId: string } }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{params.coinId}</h1>;
    </div>
  );
}
