import React from "react";
import { category } from "../../assets/data/NewsData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

const Category = () => {
  const styles = {
    category: {
      marginTop: "30px", // Reduzindo a margem superior
      position: "relative",
    },
    box: {
      borderRadius: 0,
      textAlign: "center",
      position: "relative",
      cursor: "pointer",
      overflow: "hidden",
    },
    p: {
      textTransform: "capitalize",
      fontSize: "12px", // Reduzindo o tamanho da fonte
      fontWeight: 600,
    },
    img: {
      width: "100%",
      height: "150px", // Reduzindo a altura da imagem
      objectFit: "cover",
    },
    overlay: {
      position: "absolute",
      top: "60px", // Ajustando a posição do overlay
      padding: "10px", // Reduzindo o padding
      textAlign: "center",
      width: "100%",
      zIndex: 2,
      color: "#fff",
    },
    overlayH4: {
      fontWeight: 500,
      color: "rgb(253, 246, 126)",
      fontSize: "16px", // Reduzindo o tamanho da fonte
    },
    overlayP: {
      color: "#fff",
      fontWeight: 300,
      padding: "10px", // Reduzindo o padding
      fontSize: "12px", // Reduzindo o tamanho da fonte
    },
    controlBtn: {
      button: {
        background: "rgba(255, 255, 255, 0.8)",
        width: "30px", // Reduzindo o tamanho do botão
        height: "30px",
        borderRadius: "50%",
        cursor: "pointer",
        boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "0.3s",
        padding: 0,
        border: "none",
        outline: "none",
      },
      next: {
        position: "absolute",
        top: "50%",
        right: "5px",
        transform: "translateY(-50%)", // Certificando-se de que a seta esteja centralizada verticalmente
      },
      prev: {
        position: "absolute",
        top: "50%",
        left: "5px",
        transform: "translateY(-50%)", // Certificando-se de que a seta esteja centralizada verticalmente
      },
      icon: {
        fontSize: "16px", // Reduzindo o tamanho do ícone
        color: "#333",
      },
    },
  };

  const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" style={styles.controlBtn.next} onClick={onClick}>
        <button style={styles.controlBtn.button}>
          <MdNavigateNext style={styles.controlBtn.icon} />
        </button>
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" style={styles.controlBtn.prev} onClick={onClick}>
        <button style={styles.controlBtn.button}>
          <GrFormPrevious style={styles.controlBtn.icon} />
        </button>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true, // Ativando o autoplay
    autoplaySpeed: 3000, // Definindo a velocidade do autoplay para 3 segundos
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section style={styles.category} className="category">
      <div className="content">
        <Slider {...settings}>
          {category.map((item) => (
            <div className="boxs" key={item.id}>
              <div className="box" style={styles.box}>
                <img src={item.cover} alt="cover" style={styles.img} />
                <div className="overlay" style={styles.overlay}>
                  <h4 style={styles.overlayH4}>{item.category}</h4>
                  <p style={styles.overlayP}>{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Category;
