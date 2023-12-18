import * as React from "react";
import { Typography, Toolbar, Avatar } from "@mui/material";
import "./profile-style.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
export default function Profile() {
  return (
    <div>
      <br></br>

      <div className="navigationstyle1">
        <div className="sec-nav-box">
          <Typography style={{ color: "#0A3A67" }}>Subscription</Typography>
          <VerifiedIcon style={{ color: "green" }} />
        </div>
        <div className="sec-nav-box">
          <Typography style={{ color: "#0A3A67" }}>App downloaded</Typography>
          <VerifiedOutlinedIcon style={{ color: "green" }} />
        </div>
        <div className="sec-nav-box">
          <Typography style={{ color: "#0A3A67" }}>Property added</Typography>
          <VerifiedIcon style={{ color: "green" }} />
        </div>
        <div className="sec-nav-box">
          <Typography style={{ color: "#0A3A67" }}>EKYC</Typography>
          <VerifiedIcon style={{ color: "green" }} />
        </div>
        <div className="sec-nav-box">
          <Typography style={{ color: "#0A3A67" }}>Order placed</Typography>
          <VerifiedIcon style={{ color: "green" }} />
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="status-bar">
        <div className="sec-nav-box1">
          <div className="number-div" style={{ color: "#0A3A67" }}>
            {" "}
            <h1>02</h1>
          </div>
          <Typography style={{ color: "#0A3A67" }}>Total Properties</Typography>
        </div>
        <div className="sec-nav-box1">
          <div style={{ color: "#0A3A67" }}>
            {" "}
            <h1>5.3Cr</h1>
          </div>
          <Typography style={{ color: "#0A3A67" }}>
            <span style={{ color: "#75013D" }}>+Pending</span> Net worth
          </Typography>
        </div>
        <div className="sec-nav-box1">
          <div className="number-div1" style={{ color: "#0A3A67" }}>
            {" "}
            <h1>65%</h1>
          </div>
          <Typography style={{ color: "#0A3A67" }}>
            Profile completion Status
          </Typography>
        </div>
        <div className="sec-nav-box1">
          <Avatar style={{ width: 70, height: 70 }} />
          <Typography style={{ color: "#0A3A67" }}>
            PRM <span style={{ color: "Nalini" }}>Nalini</span>
          </Typography>
        </div>
      </div>
      <br></br>
      <br></br>

      <div className="profile-section">
        <br></br>
        <Avatar
          src="\profilesImages\profileimg1.jpg"
          alt="Profile"
          style={{ width: 80, height: 80, margin: "auto" }}
        />
        <Typography
          className="profile-name"
          style={{ width: 180, margin: "auto" }}
        >
          Cameron Williamson
        </Typography>
        <br></br>
        <br></br>

        <Typography className="typo-text">About</Typography>
        <Typography className="typo-text">
          Global real etstae investor Contrary to popular belief, Lorem Ipsum is
          not simply random text. It has roots in a piece of classical Latin
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin
        </Typography>
        <hr
          style={{
            width: "97%",
            margin: "auto",
            borderColor: "#a3b5c6",
            borderWidth: ".02px",
          }}
        ></hr>
        <br></br>
        <Typography className="typo-text">Personal Details</Typography>

        <div className="details-section">
          <div className="status-bar-2">
            <div>
              <Typography className="typo-text-2"> Client Id</Typography>
              <Typography className="typo-text-3">IA-12345 </Typography>
            </div>
            <div>
              <Typography className="typo-text-2"> Onboarded by</Typography>
              <Typography className="typo-text-3">Azeez </Typography>
            </div>
            <div>
              <Typography className="typo-text-2"> DOB</Typography>
              <Typography className="typo-text-3">14.05.1985 </Typography>
            </div>
            <div>
              <Typography className="typo-text-2"> Gender</Typography>
              <Typography className="typo-text-3">Female </Typography>
            </div>
          </div>
          <br></br>
          <div className="status-bar-2">
            <div>
              <Typography className="typo-text-2"> Contact</Typography>
              <Typography className="typo-text-3">+91 9999999999 </Typography>
            </div>
            <div>
              <Typography className="typo-text-2"> Email</Typography>
              <Typography className="typo-text-3">xyz123@gmail.com </Typography>
            </div>
            <div>
              <Typography className="typo-text-2"> Occupation</Typography>
              <Typography className="typo-text-3">Business </Typography>
            </div>
            <div>
              <Typography className="typo-text-2"> Pin code</Typography>
              <Typography className="typo-text-3">560001 </Typography>
            </div>
          </div>
          <div className="status-bar-2">
            <div>
              <Typography className="typo-text-2"> City</Typography>
              <Typography className="typo-text-3">Bangalore </Typography>
            </div>
            <div>
              <Typography className="typo-text-2"> State</Typography>
              <Typography className="typo-text-3">Karnataka</Typography>
            </div>
            <div>
              <Typography className="typo-text-2"> Country</Typography>
              <Typography className="typo-text-3">India </Typography>
            </div>
            <div>
              <Typography className="typo-text-2"> </Typography>
              <Typography className="typo-text-3"></Typography>
            </div>
          </div>
        </div>

        <br></br>

        <div className="address-section">
          <Typography className="typo-text-2">Address</Typography>
          <Typography className="typo-text-4" style={{ color: "#0A3A67" }}>
            {" "}
            12th Floor, C Wing, Mittal Tower, MG Road, Bangalore{" "}
          </Typography>
        </div>
        <br></br>
        <div className="address-section-2">
          <div>
            <Typography className="typo-text-2">Special Notes</Typography>
            <Typography className="typo-text-4">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </Typography>
          </div>
        </div>
      </div>

      <br></br>

      {/* Loan Details Page-1 Section */}
      <div className="profile-section-2">
        <br></br>
        <Typography className="typo-text">Loan Details</Typography>

        <div className="main-details-section">
          <div className="details-section-2">
            <div className="status-bar-2">
              <div>
                <Typography className="typo-text-2">
                  Expected Loan(in Lakhs)
                </Typography>
                <Typography className="typo-text-3">1,00,000</Typography>
              </div>
              <div>
                <Typography className="typo-text-2">
                  {" "}
                  Net Income(per Month)
                </Typography>
                <Typography className="typo-text-3">10,000 </Typography>
              </div>
              <div>
                <Typography className="typo-text-2"> Age(in Years)</Typography>
                <Typography className="typo-text-3">1</Typography>
              </div>
            </div>
            <br></br>
            <div className="status-bar-2">
              <div>
                <Typography className="typo-text-2">
                  Employment Status
                </Typography>
                <Typography className="typo-text-3">Full-Time </Typography>
              </div>
              <div>
                <Typography className="typo-text-2"> Company Name</Typography>
                <Typography className="typo-text-3">ABC </Typography>
              </div>
              <div>
                <Typography className="typo-text-2"> Loan Status</Typography>
                <Typography className="typo-text-3">Other loans </Typography>
              </div>
            </div>
          </div>

          <br></br>

          <div className="details-section-2">
            <Typography style={{ marginLeft: 45 }} className="typo-text-3">
              {" "}
              Existing Loan Details
            </Typography>
            <div className="status-bar-2">
              <div>
                <Typography className="typo-text-2"> Loan Type</Typography>
                <Typography className="typo-text-3">Personal Loan </Typography>
              </div>
              <div>
                <Typography className="typo-text-2"> Bank</Typography>
                <Typography className="typo-text-3">HDFC</Typography>
              </div>
              <div>
                <Typography className="typo-text-2">
                  {" "}
                  Outstanding Principal
                </Typography>
                <Typography className="typo-text-3">20,00,000 </Typography>
              </div>
            </div>
            <br></br>
            <div className="status-bar-2">
              <div>
                <Typography className="typo-text-2"> Monthly EMI </Typography>
                <Typography className="typo-text-3">10,000 </Typography>
              </div>
              <div>
                <Typography sx={{ marginLeft: "70px" }} className="typo-text-2">
                  {" "}
                  Pending EMI(in Months)
                </Typography>
                <Typography sx={{ marginLeft: "70px" }} className="typo-text-3">
                  15{" "}
                </Typography>
              </div>
              <div>
                <Typography className="typo-text-2">
                  {" "}
                  Rate of Interest(%)
                </Typography>
                <Typography className="typo-text-3">10 </Typography>
              </div>
            </div>

            <br></br>
            <br></br>
          </div>

          <br></br>

          <div className="details-section-3">
            <Typography style={{ marginLeft: 45 }} className="typo-text-3">
              {" "}
              Loan Consultation Call Details
            </Typography>
            <div className="status-bar-2">
              <div>
                <Typography className="typo-text-2"> Date</Typography>
                <Typography className="typo-text-3">20/1/2024</Typography>
              </div>
              <div>
                <Typography className="typo-text-2"> Timings</Typography>
                <Typography className="typo-text-3">4:00 PM </Typography>
              </div>
              <div>
                <Typography className="typo-text-2"> Call Status</Typography>
                <Typography className="typo-text-3">Completed</Typography>
              </div>
            </div>
            <br></br>

            <div className="address-section-3">
              <Typography className="typo-text-2">Remarks</Typography>
              <Typography className="typo-text-4"> Client was busy.</Typography>
            </div>
            <br></br>
            <hr
              style={{
                width: "97%",
                margin: "auto",
                borderColor: "#a3b5c6",
                borderWidth: ".02px",
              }}
            ></hr>
            <div className="status-bar-2">
              <div>
                <Typography className="typo-text-2"> Date</Typography>
                <Typography className="typo-text-3">20/1/2024 </Typography>
              </div>
              <div>
                <Typography className="typo-text-2"> Timings</Typography>
                <Typography className="typo-text-3">4:00 PM </Typography>
              </div>
              <div>
                <Typography className="typo-text-2"> Call Status</Typography>
                <Typography className="typo-text-3">Pending </Typography>
              </div>
            </div>

            <br></br>
            <div className="address-section-3">
              <Typography className="typo-text-2">Remarks</Typography>
              <Typography className="typo-text-4">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/*---- Loan Details Page-2 for Edit Loan Details Section -----*/}

      <div className="edit-loan-details">
        <br></br>
        <Typography className="edit-loan-text">Loan Details</Typography>
        <div className="edit-loan-details-section">
          <div className="edit-loan-details-section-2">
            <div className="edit-loan-status-bar-2">
              <div>
                <Typography className="edit-loan-typo-text-2">
                  Expected Loan(in Lakhs)
                </Typography>
                <Typography className="edit-loan-typo-text-3">
                  1,00,000
                </Typography>
              </div>
              <div>
                <Typography className="edit-loan-typo-text-2">
                  {" "}
                  Net Income(per Month)
                </Typography>
                <Typography className="edit-loan-typo-text-3">
                  10,000{" "}
                </Typography>
              </div>
              <div>
                <Typography className="edit-loan-typo-text-2">
                  {" "}
                  Age(in Years)
                </Typography>
                <Typography className="edit-loan-typo-text-3">1</Typography>
              </div>
            </div>

            <div className="edit-loan-status-bar-2">
              <div>
                <Typography className="edit-loan-typo-text-status">
                  Employment Status
                </Typography>
                <Typography className="edit-loan-typo-text-3">
                  <select name="job" id="edit-loan-detail-time">
                    <option value="fulltime">Full-Time</option>
                    <option value="parttime">Part-Time</option>
                  </select>
                </Typography>
              </div>
              <div>
                <Typography className="edit-loan-typo-text-status">
                  {" "} Company Name
                </Typography>
                <Typography className="edit-loan-typo-text-3">
                ABC{" "}
                </Typography>
              </div>
              <div>
                <Typography className="edit-loan-typo-text-status">
                  {" "}
                  Loan Status
                </Typography>
                <Typography className="edit-loan-typo-text-3">
                <select name="job" id="edit-loan-detail-time">
                    <option value="loanexits">Loan Exits</option>
                    <option value="educationloan">Education Loan</option>
                  </select>
                </Typography>
              </div>
            </div>
            <div className="edit-loan-button-div">
                  <Typography >
                  <button className="edit-loan-button">Save</button>
                  </Typography>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}
