import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const LandingPage = () => {
  return (
    <div className="container my-5">
      <Head>
        <title>Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-center mb-5">Welcome to Our Landing Page</h1>
      
      <div className="row">
        <div className="col-md-6 mb-3">
          <h2>About Us</h2>
          <p>We are a dynamic and innovative company dedicated to delivering high-quality products and services. We strive to stay ahead of the curve and meet the ever-changing needs of our customers.</p>
        </div>

        <div className="col-md-6 mb-3">
          <h2>Our Products</h2>
          <p>We offer a wide range of products that are designed to meet the needs of our customers. Our products are of the highest quality and come with a guarantee of satisfaction.</p>
        </div>
      </div>

      <div className="text-center">
        <Link href="/products" legacyBehavior>
          <a className="btn btn-primary">Explore Our Products</a>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage;
