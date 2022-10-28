import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetBooksRequest } from "../../redux-saga/actions/booksActions";
import "./body.css";

export default function Body() {
  const dispatch = useDispatch();
  const { books, loading } = useSelector((state) => state.booksState);
  const [filter, setFilter] = useState("coding");

  useEffect(() => {
    dispatch(GetBooksRequest(filter));
  }, [filter]);
  const handleFilter = (value) => {
    setFilter(value);
  };
  return (
    <div className="container mt-3 bContainer ">
      <Row>
        <Col md={2} className="bSearch p-fixed me-3 bg-light">
          <div className=" text-center">
            <h1 className="bText">Search</h1>
            <div className="d-flex flex-column gap-2 my-3">
              <Button
                onClick={() => handleFilter("coding")}
                className={filter !== "coding" ? "bg-primary" : "bg-info"}
              >
                Coding
              </Button>
              <Button
                variant="primary"
                onClick={() => handleFilter("bisnis")}
                className={filter !== "bisnis" ? "bg-primary" : "bg-info"}
              >
                Bisnis
              </Button>
              <Button
                variant="primary"
                onClick={() => handleFilter("olahraga")}
                className={filter !== "olahraga" ? "bg-primary" : "bg-info"}
              >
                Olahraga
              </Button>
            </div>
          </div>
        </Col>
        <Col className="bList">
          <div className="bText bg-light w-full">
            <h1 className="text-center">List Books</h1>
          </div>
          <Row>
            {loading ? (
              "Loading"
            ) : (
              <>
                {books.items &&
                  books.items.map((item) => (
                    <Col md={4} className="mb-4" key={item.id}>
                      <Card
                        style={{
                          width: "16rem",
                          height: "20rem",
                        }}
                        className="overflow-auto"
                      >
                        <Card.Img
                          variant="top"
                          src={item.volumeInfo.imageLinks.smallThumbnail}
                        />
                        <Card.Body>
                          <Card.Title>{item.volumeInfo.title}</Card.Title>
                          <Card.Text>
                            Author : <b>{item.volumeInfo.authors[0]}</b>
                          </Card.Text>
                          <Card.Text>
                            Publisher : <b>{item.volumeInfo.publisher}</b>
                          </Card.Text>
                          <Card.Text>
                            Publish Date :{" "}
                            <b>{item.volumeInfo.publishedDate}</b>
                          </Card.Text>
                          <Card.Text className="bDesc">
                            {item.volumeInfo.description}
                          </Card.Text>
                          <a
                            href={item.volumeInfo.previewLink}
                            className="bLink"
                          >
                            Read Book . . .
                          </a>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
              </>
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
}
