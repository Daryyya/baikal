import Head from "next/head";
import Form from "../component/Form";
import backgroundImage from '../public/img/bg-home.png';
import { Title, Wrapper, Container, BackgroundImage } from "./style";
// import { Inter } from "@next/font/google";

// const font = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Байкал</title>
      </Head>
      <Wrapper>
        <BackgroundImage src={backgroundImage} alt='' fill />
        <Container>
          <Title>Рассчитайте<br/>стоимость доставки из Китая</Title>
          <Form/>
        </Container>
      </Wrapper>
    </>
  );
}
