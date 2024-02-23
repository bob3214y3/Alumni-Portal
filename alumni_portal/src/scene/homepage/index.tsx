import React from 'react'
import './home.css'

import Nam from '../../assets/nam.png'
import p11 from '../../assets/1.1.png'
import p12 from '../../assets/1.2.png'
import p21 from '../../assets/2.1.png'
import p22 from '../../assets/2.2.png'
import p31 from '../../assets/3.1.png'
import p32 from '../../assets/3.2.png'
import Zikshaa from '../../assets/zikshaa.png'
import Netcompany from '../../assets/netcompany.png'
import CLS from '../../assets/cls.png'
import EclipseUp from '../../assets/elipse-up.png'
import EclipseDown from '../../assets/elipse-down.png'
import CareerBackground from '../../assets/career-background.png'
import Curve from '../../assets/curve-in-study.png'

type Props = {}

const index = (props: Props) => {
  return (
    <div className="home-page-fill">
      
      <div className="div">
        <div className="overlap">
          <div className="frame-final">
            <div className="group-fuiter">
              <p className="text-wrapper">
                @ 2023 Betheme by Alumn Portal group | All Right Reserved |
                Powered by Figma
              </p>
              <div className="text-wrapper-2">Navigations</div>
              <div className="text-wrapper-3">Links</div>
              <p className="figma-ipsum">
                Figma <br />
                Ipsum 13 <br />2 Component <br />
                Variant 3000
                <br />
                Vietnam
              </p>
              <p className="p">
                Figma <br />
                Ipsum 13 <br />2 Component <br />
                Variant 3000
                <br />
                Vietnam
              </p>
              <p className="figma-ipsum-2">
                Figma <br />
                Ipsum 13 <br />2 Component <br />
                Variant 3000
                <br />
                Vietnam
              </p>
              <div className="logo-alumni">
                <div className="text-wrapper-4">VGU Alumni network</div>
                <img
                  className="logo-alumni-gotham"
                  alt="Logo alumni gotham"
                  src="logo-alumni-gotham-2.png"
                />
              </div>
            </div>
            <div className="rectangle" />
          </div>
          {/* <div className="frame-study">
            <div className="overlap-group">
              <div className="frame">
                <div className="rectangle-wrapper">
                  <img className="img" alt="Rectangle" src={Curve} />
                </div>
              </div>
              <div className="content">
                <div className="text-wrapper-5">Study</div>
                <p className="text-wrapper-6">Hard Work - Dream Big</p>
                <p className="study-l-n-i-l-u-tr-t">
                  Study là nơi lưu trữ tất cả các khóa học, ở đây mỗi khóa sẽ
                  bao gồm nhiều chương, từ những chương cơ bản dành cho người
                  mới bắt đầu cho đến những chương nâng cao dành cho những bạn
                  muốn học hỏi chuyên sâu.
                  <br />
                  Đồng thời, người dùng còn có thể lưu trữ những khóa học này,
                  tương tác với mentors bằng cách đánh giá cũng những đặt câu
                  hỏi thông qua các khóa mà các bạn đang theo.
                </p>
                <img className="line" alt="Line" src="line-14.svg" />
              </div>
            </div>
          </div> */}
          {/* <div className="study-highlighted">
            <div className="register">
              <div className="group-person">
                <div className="text-wrapper-7">Alicia Bethany</div>
                <div className="text-wrapper-8">Trainer</div>
                <img
                  className="icon-person"
                  alt="Icon person"
                  src="icon-person.png"
                />
              </div>
              <div className="group-time">
                <div className="text-wrapper-9">Fr 13:00 - 14:00</div>
                <div className="text-wrapper-10">Tu 07:00 - 09:00</div>
                <img
                  className="icon-clock"
                  alt="Icon clock"
                  src="icon-clock.png"
                />
              </div>
              <div className="group-calendar">
                <div className="text-wrapper-7">03/11/2022</div>
                <div className="text-wrapper-8">Start from</div>
                <img
                  className="icon-calendar"
                  alt="Icon calendar"
                  src="icon-calendar-schedule.png"
                />
              </div>
              <div className="text-wrapper-11">Frontend basis</div>
              <div className="status-pannel">
                <div className="text-wrapper-12">Completed</div>
              </div>
            </div>
            <div className="register-2">
              <div className="group-person">
                <div className="text-wrapper-7">Marry Keith</div>
                <div className="text-wrapper-8">Trainer</div>
                <img
                  className="icon-person"
                  alt="Icon person"
                  src="image.png"
                />
              </div>
              <div className="group-time">
                <div className="text-wrapper-9">Fr 13:00 - 14:00</div>
                <div className="text-wrapper-10">Tu 10:00 - 12:00</div>
                <img
                  className="icon-clock"
                  alt="Icon clock"
                  src="icon-clock-2.png"
                />
              </div>
              <div className="group-calendar">
                <div className="text-wrapper-7">04/11/2022</div>
                <div className="text-wrapper-8">Start from</div>
                <img
                  className="icon-calendar"
                  alt="Icon calendar"
                  src="icon-calendar-schedule-2.png"
                />
              </div>
              <div className="text-wrapper-11">Database for Master</div>
              <div className="status-pannel">
                <div className="text-wrapper-12">In progress</div>
              </div>
            </div>
            <div className="register-3">
              <div className="group-person-2">
                <div className="text-wrapper-7">Alicia Bethany</div>
                <div className="text-wrapper-8">Trainer</div>
                <img
                  className="icon-person"
                  alt="Icon person"
                  src="icon-person-2.png"
                />
              </div>
              <div className="group-time-2">
                <div className="text-wrapper-9">Fr 13:00 - 14:00</div>
                <div className="text-wrapper-10">Tu 07:00 - 09:00</div>
                <img
                  className="icon-clock"
                  alt="Icon clock"
                  src="icon-clock-3.png"
                />
              </div>
              <div className="group-calendar-2">
                <div className="text-wrapper-7">05/11/2022</div>
                <div className="text-wrapper-8">Start from</div>
                <img
                  className="icon-calendar"
                  alt="Icon calendar"
                  src="icon-calendar-schedule-3.png"
                />
              </div>
              <div className="text-wrapper-13">Interview for Beginner</div>
              <div className="status-pannel">
                <div className="text-wrapper-12">Register now</div>
              </div>
            </div>
            <div className="flexcontainer">
              <p className="text">
                <span className="span">
                  SOME OF OUR <br />
                </span>
                <span className="text-wrapper-14">BEST COURSES</span>
              </p>
            </div>
          </div> */}
        </div>
        <div className="frame-career">
          <div className="overlap-2">
            <img className="frame-2" alt="Frame" src={CareerBackground} />
            {/* <div className="group">
              <p className="text-wrapper-15">
                Đây là cơ hội tìm kiếm việc làm để bắt đầu hành trình mới của
                những bạn sinh viên đã xuất sắc hoàn thành những năm học ròng
                rã, các công việc sẽ được những anh chị cựu sinh viên chia sẻ và
                tạo cơ hội cho các bạn được thử sức mình.
              </p>
              <div className="text-wrapper-16">Jobs</div>
            </div> */}
            {/* <div className="group-2">
              <p className="text-wrapper-17">
                Với mục đích giúp sinh viên nâng cấp CV trong tương lai một cách
                hiệu quả, Alumni chia sẻ và cung cấp các hoạt động tình nguyện
                với nhiều hình thức từ trong nước đến ngoài nước.
              </p>
              <div className="text-wrapper-18">Volunteers</div>
            </div> */}
            {/* <div className="group-3">
              <p className="text-wrapper-19">
                Đây là cơ hội tìm kiếm việc làm để bắt đầu hành trình mới của
                những bạn sinh viên đã xuất sắc hoàn thành những năm học ròng
                rã, các công việc sẽ được những anh chị cựu sinh viên chia sẻ và
                tạo cơ hội cho các bạn được thử sức mình.
              </p>
              <div className="text-wrapper-20">Internships</div>
            </div> */}
            <div className="text-wrapper-21">Career</div>
            {/* <p className="t-i-y-c-c-b-n-sinh">
              Tại đây, các bạn sinh viên sẽ có cơ hội tìm kiếm các công việc
              chất lượng với thù lao vô cùng xịn xò do các anh chị cựu giới
              thiệu. <br />
              Ngoài ra, mọi thông tin chi tiết về cách thức đăng kí sẽ được đề
              cập <br />
              một cách cụ thể để các bạn sinh viên có thể tiếp cận dễ dàng.
            </p> */}
            <div className="text-wrapper-22">Unlock potential, fuel your</div>
            
            <img
              className="ellipse-down"
              alt="Ellipse down"
              src={EclipseDown}
            />
          </div>
        </div>
        
        <div className="frame-event">
          <div className="overlap-3">
            {/* <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="frame-logo-company">
                  <img className="zikshaa" alt="Zikshaa" src={Zikshaa} />
                  <img className="CLS" alt="Cls" src={CLS} />
                  <img
                    className="ver-dark"
                    alt="Ver dark"
                    src={Netcompany}
                  />
                </div>
                <img className="icon" alt="Icon" src="icon.png" />
              </div>
            </div> */}
            <img className="ellipse-up" alt="Ellipse up" src={EclipseUp} />
            <div className="rectangle-2" />
            <div className="event">
              <div className="overlap-4">
                <div className="content-2">
                  <p className="kinh-t-sao-l-i-th-s">
                    <span className="text-wrapper-23">Lorem ipsum,</span>
                    <span className="text-wrapper-24">
                      {" "}
                      dolor sit amet consectetur. Fermentum fusce nec ornare
                      placerat ut nullam neque. Malesuada tristique tellus at
                      quisque pretium odio id ridiculus egestas. Felis ut quam
                      purus neque enim. Feugiat quis viverra interdum dui sit
                      enim.
                    </span>
                  </p>
                  {/* <img className="icon-2" alt="Icon" src="icon-2.png" /> */}
                </div>
                <div className="group-4">
                  <img className="element" alt="Element" src={p31} />
                  <img className="element-2" alt="Element" src={p32}/>
                  <div className="text-wrapper-25">03</div>
                  <div className="text-wrapper-30">Alumni Team Building</div>
                </div>
              </div>
            </div>
            <div className="event-2">
              <div className="overlap-5">
                <div className="content-3">
                  <p className="interview-mastery">
                    <span className="text-wrapper-23">
                      Interview Mastery Workshop
                    </span>
                    <span className="text-wrapper-27">&nbsp;</span>
                    <span className="text-wrapper-24">
                      là 1 trong những sự kiện đã chiếm trọn nhiều sự quan tâm
                      của các bạn sinh viên VGU. Đồng thời, với sự hợp tác của
                      Zikshaa - công ty công nghệ hàng đầu Ấn Độ đã thành công
                      mang lại cho sinh viên về những kiến thức bổ ích, giúp các
                      bạn khai thác tốt về điểm mạnh và yếu của bản thân.
                    </span>
                  </p>
                  {/* <img className="icon-3" alt="Icon" src="icon-3.png" /> */}
                </div>
                <div className="group-5">
                  <img className="element-3" alt="Element" src={p22} />
                  <img className="element-4" alt="Element" src={p21} />
                  <div className="text-wrapper-28">02</div>
                  <div className="text-wrapper-29">
                    Interview Mastery Workshop
                  </div>
                </div>
              </div>
           
            </div>
            <div className="event-3">
              <div className="overlap-6">
                <div className='content-4'>
                  <p className="kinh-t-sao-l-i-th-s">
                    <span className="text-wrapper-23">
                      “Kinh tế sao lại thế”{" "}
                    </span>
                    <span className="text-wrapper-24">
                      - số đầu tiên trong series Alumni Talk đã được Alumni
                      Network triển khai với phương châm mang lại kiến thức mới
                      và kinh nghiệm cần thiết cho các bạn sinh viên, đặc biệt
                      là những nhà kinh tế của tương lai. Không những thế,
                      series còn sẽ được tiếp tục kéo dài để mang lại nhiều điều
                      hay ho và mới mẻ dành cho từng ngành học.
                    </span>
                  </p>
                  {/* <img className="icon-4" alt="Icon" src="icon-4.png" /> */}
                  </div>
                <div className="group-4">
                  <img className="element-5" alt="Element" src={p12} />
                  <img className="element-2" alt="Element" src={p11} />
                  <div className="text-wrapper-25">01</div>
                  <div className="text-wrapper-30">Alumni Talk</div>
                </div>
              </div>
              
            </div>
            <div className="frame-3">
              <div className="text-wrapper-31">Events</div>
              <div className="stay-updated-don-t">
                Stay updated, don&#39;t miss
              </div>
            </div>
          </div>
        </div>
        <div className="frame-about-us">
          <div className="overlap-7">
            <div className="overlap-8">
              <div className="about-us">
                <div className="text-wrapper-32">Welcome to VGU Alumni Network</div>
                <div className="text-wrapper-33">About Us</div>
                <div className="content-5">
                  <p className="c-th-nh-l-p-v-o-nh">
                    Được thành lập vào những năm đầu của đại học Việt Đức VGU Alumni Network mang theo sứ mệnh là tạo ra một môi trường dành cho các anh chị cựu và các bạn sinh viên, từ đó giúp các bạn có thêm cơ hội được giao lưu và học hỏi thêm về những kiến thức và kinh nghiệm mà các anh chị đi trước đã trải qua.
                  </p>

                  <div className="button-continues">
                    <div className="div-wrapper">
                      <div className="text-wrapper-34">Continues</div>
                    </div>
                  </div>
                </div>
              </div>
              { <img className="nam" alt="Nam" src={Nam} /> }
            </div>
          </div>
        </div>
        
        <div className="frame-intro">
          <div className="intro">
            <div className="overlap-9">
              <div className="group-intro-home">
                <div className="group-center">
                  <button className="button-get-started">
                    <div className="overlap-group-3">
                      <div className="text-wrapper-35">Get started</div>
                    </div>
                  </button>
                  <div className="content-6">
                    <div className="overlap-10">
                      <div className="text-wrapper-36">
                        ALUMNI
                        <div className="text-wrapper-37">NETWORK</div>
                      </div>
                    </div>
                    <div className="text-wrapper-38">vgu new playground</div>
                    <p className="text-wrapper-39">
                      Figma ipsum component variant main layer 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <header className="header">
            <img
              className="icon-person-2"
              alt="Icon person"
              src="icon-person.svg"
            />
            <div className="navbar">
              <div className="text-wrapper-40">Career</div>
              <div className="text-wrapper-41">Study</div>
              <div className="text-wrapper-42">Event</div>
              <div className="text-wrapper-43">About us</div>
              <div className="text-wrapper-44">Home</div>
            </div>
            <div className="logo-alumni-2">
              <div className="text-wrapper-45">VGU Alumni network</div>
              <img
                className="logo-alumni-gotham-2"
                alt="Logo alumni gotham"
                src="logo-alumni-gotham-2-2.png"
              />
            </div>
          </header>
        </div>
      </div>
     
    </div>
  );
}

export default index