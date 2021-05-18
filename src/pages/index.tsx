import { Button, Nav, Link, Dropdown, Container } from "../styles/index";
import {
  FaHeart,
  FaGamepad,
  FaPlug,
  FaBabyCarriage,
  FaCouch,
  FaLandmark,
  FaMask,
  FaTag,
  FaSlidersH,
} from "react-icons/fa";
import { useState } from "react";
import Highlights from "../components/Highlights";
import Card from "../components/Card";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Destaque");
  return (
    <>
      <Nav>
        <Button>
          <FaPlug size={16} /> &nbsp; Eletrônicos
        </Button>
        <Button>
          <FaGamepad size={18} />
          &nbsp; Games e PC Gamer
        </Button>
        <Button>
          <FaCouch size={16} />
          &nbsp; Casa e Cozinha
        </Button>
        <Button>
          <FaTag size={16} />
          &nbsp; Grátis
        </Button>
        <Button>
          <FaMask size={16} />
          &nbsp; Moda
        </Button>
        <Button>
          <FaHeart size={16} />
          &nbsp; Saúde e Beleza
        </Button>
        <Button>
          <FaBabyCarriage size={16} />
          &nbsp; Família e Crianças
        </Button>
        <Button>
          <FaLandmark size={16} />
          &nbsp; Finanças
        </Button>
      </Nav>
      <Nav>
        <Link
          isActive={activeTab === "Destaque"}
          onClick={() => setActiveTab("Destaque")}
        >
          Destaque
        </Link>
        <Link
          isActive={activeTab === "Mais quentes"}
          onClick={() => setActiveTab("Mais quentes")}
        >
          Mais quentes
        </Link>
        <Link
          isActive={activeTab === "Novidades"}
          onClick={() => setActiveTab("Novidades")}
        >
          Novidades
        </Link>
        <Link
          isActive={activeTab === "Comentarios"}
          onClick={() => setActiveTab("Comentarios")}
        >
          Comentarios
        </Link>
        <Dropdown>
          <FaSlidersH size={18} />
          &nbsp; Opções
        </Dropdown>
      </Nav>
      <Highlights />
      <Container>
        <Card />
      </Container>
    </>
  );
}
