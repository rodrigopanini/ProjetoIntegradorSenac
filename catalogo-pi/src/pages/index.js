import Produto from "@/components/Produto";

export default function Home() {
  return (
    <div className="container-fluid mt-2">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <Produto />
      </div>
    </div>
  );
}
