import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import LandingPage from '../components/LandingPage';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Header></Header>
      <LandingPage></LandingPage>
      <Footer></Footer>

    </div>
  )
}
