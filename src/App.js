import React, { Component } from "react";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Spinner,
  Container,
  Breadcrumb,
  Tabs,
  Tab,
  Table,
  ProgressBar,
  Button,
  Collapse,
  OverlayTrigger,
  Popover,
  Col,
  Row,
  ButtonGroup,
  Pagination,
} from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buka: false,
    };
  }
  render() {
    const munculOverlay = (
      <Popover title="informasi">
        <Popover.Title as="h3">Informasi Website</Popover.Title>
        <Popover.Content>
          Website ini dibuat untuk memudahkan dalam pencairan informasi terkini
          tentang olahraga
        </Popover.Content>
      </Popover>
    );
    return (
      <div>
        <Container style={{ maxWidth: "1200px" }}>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Akses Sport</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/">Berita</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/">Live Scores</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/">Live Scores</Nav.Link>
              </Nav.Item>
              <NavDropdown title="Piala & Liga" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Liga Primer Inggris
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Serie A</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Divisi Primera
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Bundesliga
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link href="/">Transfer Pemain</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/">Tim</Nav.Link>
              </Nav.Item>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>

          <Row>
            <Col md={{ span: 4, offset: 6 }}>
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                  Liga Inggris
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Transfer Pemain</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
            <Col></Col>
          </Row>

          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <Row>
                <Col xs="5">
                  <h3>Rumor Transfer Pemain</h3>
                </Col>
                <Col xs="6"></Col>
                <Col>
                  <Spinner animation="border" variant="success" />
                </Col>
              </Row>
              <Tabs defaultActiveKey="transfer">
                <Tab eventKey="transfer" title="Semua Transfer">
                  <Table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nama Pemain</th>
                        <th>Tim</th>
                        <th>Transfer</th>
                        <th>Proses Transfer</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>MAROUNE FELLAINI</td>
                        <td>MANCHESTER UNITED</td>
                        <td>SHANDONG LUNENG</td>
                        <td>
                          <ProgressBar now={85} label="85%" />
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>LUIS NANI</td>
                        <td>SPORTING CP</td>
                        <td>ORLANDI CITY</td>
                        <td>
                          <ProgressBar now={55} label="55%" />
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>MAREK HAMSIK</td>
                        <td>NAPOLI</td>
                        <td>DALIAN YIFANG</td>
                        <td>
                          <ProgressBar now={95} label="95%" />
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>SARDAR AZMOUN</td>
                        <td>RUBIN KAZAN</td>
                        <td>ZENIT ST PETERSBURG</td>
                        <td>
                          <ProgressBar now={100} label="100%" />
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>MICHY BATSHUAYI</td>
                        <td>CHELSEA</td>
                        <td>CRYSTAL PALACE</td>
                        <td>
                          <ProgressBar now={50} label="50%" />
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>LUCAS PIAZON</td>
                        <td>CHELSEA</td>
                        <td>CHIEVO</td>
                        <td>
                          <ProgressBar now={100} label="100%" />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Tab>
                <Tab eventKey="ligainggris" title="Liga Primer Inggris">
                  <p>Detail Liga Primer Inggris</p>
                </Tab>
                <Tab eventKey="seria" title="Seri A">
                  <p>Detail Seri A</p>
                </Tab>
                <Tab eventKey="primera" title="Divisi Primera">
                  <p>Detail Divisi Primera</p>
                </Tab>
                <Tab eventKey="bundesliga" title="Bundesliga">
                  <p>Detail Bundesliga</p>
                </Tab>
                <Tab eventKey="ligaindo" title="Liga Indonesia">
                  <p>Detail Liga Indonesia</p>
                </Tab>
              </Tabs>

              <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
              </Pagination>

              <Row>
                <Col xs={2}>
                  <OverlayTrigger
                    trigger="click"
                    overlay={munculOverlay}
                    placement="right"
                  >
                    <Button variant="primary">Informasi</Button>
                  </OverlayTrigger>
                </Col>
                <Col xs={3}>
                  <ButtonGroup
                    vertical
                    className="ml-n4"
                    aria-label="Second group"
                  >
                    <Button
                      variant="primary"
                      aria-controls="example-collapse-text"
                      onClick={() => this.setState({ buka: !this.state.buka })}
                    >
                      Versi Website
                    </Button>
                    <Collapse in={this.state.buka}>
                      <div id="example-collapse-text">Akses Sport V1.0</div>
                    </Collapse>
                  </ButtonGroup>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
