import { Button, Stack, Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { products } from "../../assets/data/products";
import ProductCard from "./ProductCard";
import "../../styles/menu-pack.css";

const MenuPack = () => {
      const [selectedCategory, setSelectedCategory] = useState("All");
      const [allProducts, setAllProducts] = useState(products);
      useEffect(() => {
            if (selectedCategory === "All") {
                  setAllProducts(products);
            }

            if (selectedCategory === "Burger") {
                  const filteredProducts = products.filter(
                        (item) => item.category === "Burger"
                  );
                  setAllProducts(filteredProducts);
            }
            if (selectedCategory === "Bread") {
                  const filteredProducts = products.filter(
                        (item) => item.category === "Bread"
                  );
                  setAllProducts(filteredProducts);
            }
            if (selectedCategory === "Cake") {
                  const filteredProducts = products.filter(
                        (item) => item.category === "Cake"
                  );
                  setAllProducts(filteredProducts);
            }
            if (selectedCategory === "Chicken") {
                  const filteredProducts = products.filter(
                        (item) => item.category === "Chicken"
                  );
                  setAllProducts(filteredProducts);
            }
            if (selectedCategory === "Dish") {
                  const filteredProducts = products.filter(
                        (item) => item.category === "Dish"
                  );
                  setAllProducts(filteredProducts);
            }
            if (selectedCategory === "Sandwich") {
                  const filteredProducts = products.filter(
                        (item) => item.category === "Sandwich"
                  );
                  setAllProducts(filteredProducts);
            }
            if (selectedCategory === "Tacos") {
                  const filteredProducts = products.filter(
                        (item) => item.category === "Tacos"
                  );
                  setAllProducts(filteredProducts);
            }
      }, [selectedCategory]);

      return (
            <section>
                  <Box>
                        <Typography
                              variant="h4"
                              color="maroon"
                              textAlign="center"
                        >
                              Our Menu Pack
                        </Typography>
                  </Box>
                  <Box>
                        <Stack
                              sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "1rem",
                                    borderRadius: "0.5rem",
                                    flexDirection: "row",
                                    gap: "1rem",
                                    background:
                                          "linear-gradient(to right, #eb3a3a 0%, #e46a6a 100%)",
                              }}
                        >
                              <Button
                                    className={`category__btn ${
                                          selectedCategory == "All"
                                                ? "active__category"
                                                : ""
                                    }`}
                                    onClick={() => setSelectedCategory("All")}
                              >
                                    All
                              </Button>
                              <Button
                                    className={`category__btn ${
                                          selectedCategory == "Bread"
                                                ? "active__category"
                                                : ""
                                    }`}
                                    onClick={() => setSelectedCategory("Bread")}
                              >
                                    Bread
                              </Button>
                              <Button
                                    className={`category__btn ${
                                          selectedCategory == "Burger"
                                                ? "active__category"
                                                : ""
                                    }`}
                                    onClick={() =>
                                          setSelectedCategory("Burger")
                                    }
                              >
                                    Burger
                              </Button>
                              <Button
                                    className={`category__btn ${
                                          selectedCategory == "Cake"
                                                ? "active__category"
                                                : ""
                                    }`}
                                    onClick={() => setSelectedCategory("Cake")}
                              >
                                    Cake
                              </Button>
                              <Button
                                    className={`category__btn ${
                                          selectedCategory == "Chicken"
                                                ? "active__category"
                                                : ""
                                    }`}
                                    onClick={() =>
                                          setSelectedCategory("Chicken")
                                    }
                              >
                                    Chicken
                              </Button>
                              <Button
                                    className={`category__btn ${
                                          selectedCategory == "Dish"
                                                ? "active__category"
                                                : ""
                                    }`}
                                    onClick={() => setSelectedCategory("Dish")}
                              >
                                    Dishes
                              </Button>
                              <Button
                                    className={`category__btn ${
                                          selectedCategory == "Sandwich"
                                                ? "active__category"
                                                : ""
                                    }`}
                                    onClick={() =>
                                          setSelectedCategory("Sandwich")
                                    }
                              >
                                    Sandwich
                              </Button>
                              <Button
                                    className={`category__btn ${
                                          selectedCategory == "Tacos"
                                                ? "active__category"
                                                : ""
                                    }`}
                                    onClick={() => setSelectedCategory("Tacos")}
                              >
                                    Tacos
                              </Button>
                        </Stack>
                  </Box>
                  <Box
                        sx={{
                              display: "flex",
                              flexWrap: "wrap",
                              alignItems: "center",
                              justifyContent: "center",
                        }}
                        className="menu__stack"
                  >
                        {allProducts.slice(0, 12).map((item) => (
                              <Stack
                                    key={item.id}
                                    direction="row"
                                    spacing={2}
                                    m={2}
                              >
                                    <ProductCard item={item} />
                              </Stack>
                        ))}
                  </Box>
            </section>
      );
};

export default MenuPack;