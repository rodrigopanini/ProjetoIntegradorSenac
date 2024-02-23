import Image from "next/image";

export default function Produto() {
  return (
    <div class="col-3">
      <div class="card shadow-sm">
        <svg
          class="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c"></rect>
        </svg>
        <div class="card-body">
          <h2>Nome do Produto</h2>
          <p class="card-text">Descrição do produto vai entrar nesse espaço</p>
          <div class="d-flex justify-content-between align-items-center">
            <span class="badge text-bg-secondary">Indisponível</span>
            <span class="badge text-bg-success">Novidade</span>
          </div>
          <div class="text-end mt-3">
            <h3 class="text-body-secondary">R$ 20,00</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
