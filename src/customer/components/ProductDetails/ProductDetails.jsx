import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";
import { Button, Grid, Rating, Box, LinearProgress } from "@mui/material";
import ProductReviewCard from "./ProductReviewCard";
import { productList } from "../../mens/productList";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProductById } from "../../../State/Product/Action";
import { addCartItem } from "../../../State/Cart/Action";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  // const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState("");
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { customerProduct } = useSelector((store) => store);

  useEffect(() => {
    const data = { productId: params.productId };
    dispatch(findProductById(data));
  }, [params.productId]);

  const handleAddToCart = () => {
    const data = {
      productId: params.productId,
      size: selectedSize.name,
      quantity: 1,
    };
    dispatch(addCartItem(data));

    navigate("/cart");
  };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // // Handle error state if there is an error fetching the product
  // if (error) {
  //   return <div>Error loading product: {error.message}</div>;
  // }

  // Ensure the product is fully loaded before accessing its properties
  if (!customerProduct) {
    return <div>No product found</div>;
  }

  return (
    <div className="bg-white lg:px-20">
      {customerProduct ? (
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              {product.breadcrumbs.map((breadcrumb) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center">
                    <a
                      href={breadcrumb.href}
                      className="mr-2 text-sm font-medium text-gray-900"
                    >
                      {breadcrumb.name}
                    </a>
                    <svg
                      width={16}
                      height={20}
                      viewBox="0 0 16 20"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-5 w-4 text-gray-300"
                    >
                      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                    </svg>
                  </div>
                </li>
              ))}
              <li className="text-sm">
                <a
                  href={product.href}
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600"
                >
                  {product.name}
                </a>
              </li>
            </ol>
          </nav>
          {/* grid section */}
          <section className="  grid  lg:grid-cols-2 gap-x-8 gap-y-8">
            {/* Image gallery */}
            <div className="flex flex-col items-center">
              <div className="overflow-hidden rounded-lg max-w-[30rem]  max-h-[35rem]">
                <img
                  src={customerProduct.product?.imageURl}
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <div className=" flex flex-wrap b items-center space-x-5  h-[15vh] justify-center">
                {product.product?.images.map((item, index) => (
                  <div key={index} className="overflow-hidden rounded-lg  g-5">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="object-cover object-center w-[5rem] h-[5rem]"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product info */}
            <div className="lg:col-span-1 max-h-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 ">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-lg lg:text-xl font-semibold text-gray-900">
                  {customerProduct.product?.brand}
                </h1>

                <h1 className="text-lg lg:text-xl text-gray-900 opacity-60 pt-1">
                  {customerProduct.product?.title}
                </h1>
              </div>

              {/* Options */}
              <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>
                <div className="space-x-5 pt-3 text-lg lg:text-xl">
                  <span className="font-semibold ">
                    {customerProduct.product?.discountedPrice}
                  </span>
                  <span className="line-through opacity-60 ">
                    {customerProduct.product?.price}
                  </span>
                  <span className="font-semibold text-green-600">
                    {customerProduct.product?.discountPercent}% Off
                  </span>
                </div>

                {/* Reviews */}
                <div className="mt-6">
                  <h3 className="sr-only">Reviews</h3>

                  <div className="flex space-x-5">
                    <span>
                      <Rating name="read-only" value={4} readOnly />
                    </span>
                    <span>
                      <h5 className="text-zinc-400">54540 Ratings</h5>
                    </span>
                    <span>
                      <h5 className="text-indigo-600 hover:text-indigo-700">
                        3870 Reviews
                      </h5>
                    </span>
                  </div>
                </div>

                <form className="mt-10">
                  {/* Sizes */}
                  <div className="mt-10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium text-gray-900">
                        Size
                      </h3>
                    </div>

                    <fieldset aria-label="Choose a size" className="mt-4">
                      <RadioGroup
                        value={selectedSize}
                        onChange={setSelectedSize}
                        className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                      >
                        {product.sizes.map((size) => (
                          <Radio
                            key={size.name}
                            value={size}
                            disabled={!size.inStock}
                            className={({ focus }) =>
                              classNames(
                                size.inStock
                                  ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                  : "cursor-not-allowed bg-gray-50 text-gray-200",
                                focus ? "ring-2 ring-indigo-500" : "",
                                "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                              )
                            }
                          >
                            {({ checked, focus }) => (
                              <>
                                <span>{size.name}</span>
                                {size.inStock ? (
                                  <span
                                    className={classNames(
                                      checked
                                        ? "border-indigo-500"
                                        : "border-transparent",
                                      focus ? "border" : "border-2",
                                      "pointer-events-none absolute -inset-px rounded-md"
                                    )}
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                  >
                                    <svg
                                      className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                      viewBox="0 0 100 100"
                                      preserveAspectRatio="none"
                                      stroke="currentColor"
                                    >
                                      <line
                                        x1={0}
                                        y1={100}
                                        x2={100}
                                        y2={0}
                                        vectorEffect="non-scaling-stroke"
                                      />
                                    </svg>
                                  </span>
                                )}
                              </>
                            )}
                          </Radio>
                        ))}
                      </RadioGroup>
                    </fieldset>
                  </div>
                  <div className="mt-5">
                    <Button
                      onClick={handleAddToCart}
                      variant="contained"
                      className="w-[8vw] h-[5vh] bg-[#9155fd]"
                      sx={{
                        bgcolor: "#9155fd",
                        width: { xs: "20vh", sm: "20vh" },
                      }}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </form>
              </div>

              <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                {/* Description and details */}
                <div>
                  <h3 className="sr-only">Description</h3>

                  <div className="space-y-6">
                    <p className="text-base text-gray-900">
                      {customerProduct.product?.description}
                    </p>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-sm font-medium text-gray-900">
                    Highlights
                  </h3>

                  <div className="mt-4">
                    <ul
                      role="list"
                      className="list-disc space-y-2 pl-4 text-sm"
                    >
                      {product.highlights.map((highlight) => (
                        <li key={highlight} className="text-gray-400">
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10">
                  <h2 className="text-sm font-medium text-gray-900">Details</h2>

                  <div className="mt-4 space-y-6">
                    <p className="text-sm text-gray-600">{product.details}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* {ratings and reviews} */}
          <section>
            <h1 className=" font-semibold text-lg pb-4 mx-3">
              {" "}
              Recent Review & Rating
            </h1>
            <div className="border p-5 mx-3 my-3">
              <Grid container spacing={7}>
                <Grid item xs={7}>
                  <div>
                    {[1, 1, 1].map((item) => (
                      <ProductReviewCard />
                    ))}
                  </div>
                </Grid>

                <Grid item xs={5}>
                  <h1 className="text-xl font-semibold pb-1">
                    {" "}
                    Product Ratings
                  </h1>
                  <div className="flex items center space-x-3">
                    <Rating value={4.6} precision={0.5} readOnly />
                    <p className="text-zinc-400">54890 Ratings</p>
                  </div>

                  <Box sx={{ width: "100%", mt: 2, py: "5vh" }}>
                    <Grid container spacing={3}>
                      <Grid item xs={3}>
                        <p className="font-semibold">Excellent</p>
                      </Grid>
                      <Grid item xs={9}>
                        <LinearProgress
                          variant="determinate"
                          value={80}
                          sx={{ bgcolor: "zinc", borderRadius: 4, height: 7 }}
                          color="success"
                        />
                      </Grid>

                      <Grid item xs={3}>
                        <p className="font-semibold">Very Good</p>
                      </Grid>
                      <Grid item xs={9}>
                        <LinearProgress
                          variant="determinate"
                          value={60}
                          className="bg-zinc-500"
                          sx={{ borderRadius: 4, height: 7 }}
                          color="primary"
                        />
                      </Grid>

                      <Grid item xs={3}>
                        <p className="font-semibold">Average</p>
                      </Grid>
                      <Grid item xs={9}>
                        <LinearProgress
                          variant="determinate"
                          className="bg-zinc-500"
                          value={40}
                          sx={{
                            bgcolor: "zinc-400",
                            borderRadius: 4,
                            height: 7,
                          }}
                          color="secondary"
                        />
                      </Grid>

                      <Grid item xs={3}>
                        <p className="font-semibold">Poor</p>
                      </Grid>
                      <Grid item xs={9}>
                        <LinearProgress
                          variant="determinate"
                          value={20}
                          sx={{ bgcolor: "zinc", borderRadius: 4, height: 7 }}
                          color="warning"
                        />
                      </Grid>

                      <Grid item xs={3}>
                        <p className="font-semibold">Terrible</p>
                      </Grid>
                      <Grid item xs={9}>
                        <LinearProgress
                          variant="determinate"
                          value={10}
                          sx={{ bgcolor: "zinc", borderRadius: 4, height: 7 }}
                          color="error"
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </div>
          </section>

          {/* {similar product} */}

          <section className="pt-10 mb-5">
            <div className="flex flex-wrap space-y-5 space-x-3">
              {productList.map((item) => (
                <HomeSectionCard
                  image={item.image}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </section>
        </div>
      ) : (
        <h1>Is Loading.....</h1>
      )}
    </div>
  );
}
