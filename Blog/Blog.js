import Card from "react-bootstrap/Card";
import CardBlog from "./CardBlog";
import "./Blog.css";

function Blog() {
  return (
    <>
      <Card>
        <Card.Img variant="top" className="imgs" src="testimg.png" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <CardBlog></CardBlog>
    </>
  );
}

export default Blog;
