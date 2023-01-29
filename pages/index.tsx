import Head from 'next/head';
import HomeForm from '../component/HomeForm';
import backgroundImage from '../public/img/bg-home.png';
import { Title, Wrapper, Container, BackgroundImage } from '../styles/home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Байкал</title>
      </Head>
      <Wrapper>
        <BackgroundImage src={backgroundImage} alt="" fill />
        <Container>
          <Title>
            Рассчитайте
            <br />
            стоимость доставки из Китая
          </Title>
          <HomeForm />
        </Container>
      </Wrapper>
    </>
  );
}
