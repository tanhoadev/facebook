import React from 'react'

function Navigation() {
    return (
        <div className="container-fluid fixed-top">
            <div className="container topbar bg-primary d-none d-lg-block">
                <div className="d-flex justify-content-between">
                    <div className="top-info ps-2">
                        <small className="me-3">
                            <i className="fas fa-map-marker-alt me-2 text-secondary" />{" "}
                            <a href="#" className="text-white">
                                258 Đường Phù Đổng Thiên Vương, Phường 8, TP Đà Lạt
                            </a>
                        </small>
                        <small className="me-3">
                            <i className="fas fa-envelope me-2 text-secondary" />
                            <a href="#" className="text-white">
                                dacsanmaiquynhdalat@gmail.com
                            </a>
                        </small>
                    </div>
                    <div className="top-link pe-2">
                        {/* <a href="#" class="text-white"><small class="text-white mx-2">Privacy Policy</small>/</a>
                  <a href="#" class="text-white"><small class="text-white mx-2">Terms of Use</small>/</a>
                  <a href="#" class="text-white"><small class="text-white ms-2">Sales and Refunds</small></a> */}
                    </div>
                </div>
            </div>
            <div className="container px-0">
                <nav className="navbar navbar-light bg-white navbar-expand-xl">
                    <a href="index.html" className="navbar-brand">
                        <h1 className="text-primary display-6">Mai Quỳnh</h1>
                    </a>
                    <button
                        className="navbar-toggler py-2 px-3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <span className="fa fa-bars text-primary" />
                    </button>
                    <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <a href="index.html" className="nav-item nav-link ">
                                Trang Chủ
                            </a>
                            <div className="nav-item dropdown">
                                <a
                                    href="sanpham.html"
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                >
                                    Sản Phẩm
                                </a>
                                <div className="dropdown-menu m-0 bg-secondary rounded-0">
                                    <a href="sanpham.html" className="dropdown-item">
                                        Tất Cả Sản Phẩm
                                    </a>
                                    <a href="sanpham.html" className="dropdown-item">
                                        Nước Trái Cây
                                    </a>
                                    <a href="chackout.html" className="dropdown-item">
                                        Trà - Cafe
                                    </a>
                                    <a href="testimonial.html" className="dropdown-item">
                                        Kẹo - Mứt
                                    </a>
                                    <a href="404.html" className="dropdown-item">
                                        Atiso
                                    </a>
                                    <a href="404.html" className="dropdown-item">
                                        Sấy Giòn
                                    </a>
                                    <a href="404.html" className="dropdown-item">
                                        Sấy Dẻo
                                    </a>
                                    <a href="404.html" className="dropdown-item">
                                        Hồng
                                    </a>
                                    <a href="404.html" className="dropdown-item">
                                        Các Loại Khô
                                    </a>
                                </div>
                            </div>
                            <a href="gioithieu.html" className="nav-item nav-link">
                                Giới Thiệu
                            </a>
                            <a href="contact.html" className="nav-item nav-link">
                                Liên Hệ
                            </a>
                        </div>
                        <div className="d-flex m-3 me-0">
                            <button
                                className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
                                data-bs-toggle="modal"
                                data-bs-target="#searchModal"
                            >
                                <i className="fas fa-search text-primary" />
                            </button>
                            <a href="#" className="position-relative me-4 my-auto">
                                <i className="fa fa-shopping-bag fa-2x" />
                                <span
                                    className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                                    style={{ top: "-5px", left: 15, height: 20, minWidth: 20 }}
                                >
                                    3
                                </span>
                            </a>
                            <a href="#" className="my-auto">
                                <i className="fas fa-user fa-2x" />
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navigation