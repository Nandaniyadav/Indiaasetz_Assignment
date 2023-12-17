import * as React from "react";
import { Typography, Toolbar, Avatar } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
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
          <Typography style={{ color: "#0A3A67" }}>Total Properties</Typography>
        </div>
        <div className="sec-nav-box1">
          <div className="number-div1" style={{ color: "#0A3A67" }}>
            {" "}
            <h1>56</h1>
          </div>
          <Typography style={{ color: "#0A3A67" }}>Total Properties</Typography>
        </div>
        <div className="sec-nav-box1">
          <Avatar style={{ width: 70, height: 70 }} />
          <Typography style={{ color: "#0A3A67" }}>Total Properties</Typography>
        </div>
      </div>
      <br></br>
      <br></br>

      <div className="profile-section">
        <br></br>
        <Avatar alt="Cb" style={{ width: 80, height: 80, margin: "auto" }} />
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
              <Typography className="typo-text-2"> Client Id</Typography>
              <Typography className="typo-text-3">IA-12345 </Typography>
            </div>
            <div>
              <Typography className="typo-text-2"> Client Id</Typography>
              <Typography className="typo-text-3">IA-12345 </Typography>
            </div>
            <div>
              <Typography className="typo-text-2"> Client Id</Typography>
              <Typography className="typo-text-3">IA-12345 </Typography>
            </div>
          </div>
          <br></br>
          <div className="status-bar-2">
            <div>
              <Typography className="typo-text-2"> Client Id</Typography>
              <Typography className="typo-text-3">IA-12345 </Typography>
            </div>
            <div>
              <Typography className="typo-text-2"> Client Id</Typography>
              <Typography className="typo-text-3">IA-12345 </Typography>
            </div>
            <div>
              <Typography className="typo-text-2"> Client Id</Typography>
              <Typography className="typo-text-3">IA-12345 </Typography>
            </div>
            <div>
              <Typography className="typo-text-2"> Client Id</Typography>
              <Typography className="typo-text-3">IA-12345 </Typography>
            </div>
          </div>
          <div className="status-bar-2">
            <div>
              <Typography className="typo-text-2"> Client Id</Typography>
              <Typography className="typo-text-3">IA-12345 </Typography>
            </div>
            <div>
              <Typography className="typo-text-2"> Client Id</Typography>
              <Typography className="typo-text-3">IA-12345 </Typography>
            </div>
            <div>
              <Typography className="typo-text-2"> Client Id</Typography>
              <Typography className="typo-text-3">IA-12345 </Typography>
            </div>
            <div>
              <Typography className="typo-text-2"> Client Id</Typography>
              <Typography className="typo-text-3">IA-12345 </Typography>
            </div>
          </div>
        </div>

        <br></br>

        <div className="address-section">
          <Typography className="typo-text-2">Address</Typography>
          <Typography className="typo-text-4">
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

      <div className="profile-section-2">
        <br></br>
        <Typography className="typo-text">Loan Details</Typography>

        <div className="main-details-section">
          <div className="details-section-2">
            <div className="status-bar-2">
              <div>
                <Typography className="typo-text-2"> Client Id</Typography>
                <Typography className="typo-text-3">IA-12345 </Typography>
              </div>
              <div>
                <Typography className="typo-text-2"> Client Id</Typography>
                <Typography className="typo-text-3">IA-12345 </Typography>
              </div>
              <div>
                <Typography className="typo-text-2"> Client Id</Typography>
                <Typography className="typo-text-3">IA-12345 </Typography>
              </div>
              <div>
                <Typography className="typo-text-2"> Client Id</Typography>
                <Typography className="typo-text-3">IA-12345 </Typography>
              </div>
            </div>
            <br></br>
            <div className="status-bar-2">
              <div>
                <Typography className="typo-text-2"> Client Id</Typography>
                <Typography className="typo-text-3">IA-12345 </Typography>
              </div>
              <div>
                <Typography className="typo-text-2"> Client Id</Typography>
                <Typography className="typo-text-3">IA-12345 </Typography>
              </div>
              <div>
                <Typography className="typo-text-2"> Client Id</Typography>
                <Typography className="typo-text-3">IA-12345 </Typography>
              </div>
              <div>
                <Typography className="typo-text-2"> Client Id</Typography>
                <Typography className="typo-text-3">IA-12345 </Typography>
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
                <Typography className="typo-text-2"> Client Id</Typography>
                <Typography className="typo-text-3">IA-12345 </Typography>
              </div>
              <div>
                <Typography className="typo-text-2"> Client Id</Typography>
                <Typography className="typo-text-3">IA-12345 </Typography>
              </div>
              <div>
                <Typography className="typo-text-2"> Client Id</Typography>
                <Typography className="typo-text-3">IA-12345 </Typography>
              </div>
              <div>
                <Typography className="typo-text-2"> Client Id</Typography>
                <Typography className="typo-text-3">IA-12345 </Typography>
              </div>
            </div>
            <br></br>
            <div className="status-bar-2">
              <div>
                <Typography className="typo-text-2"> Client Id</Typography>
                <Typography className="typo-text-3">IA-12345 </Typography>
              </div>
              <div>
                <Typography className="typo-text-2"> Client Id</Typography>
                <Typography className="typo-text-3">IA-12345 </Typography>
              </div>
              <div>
                <Typography className="typo-text-2"> Client Id</Typography>
                <Typography className="typo-text-3">IA-12345 </Typography>
              </div>
              <div>
                <Typography className="typo-text-2"> Client Id</Typography>
                <Typography className="typo-text-3">IA-12345 </Typography>
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
                <Typography className="typo-text-2"> Client Id</Typography>
                <Typography className="typo-text-3">IA-12345 </Typography>
              </div>
              <div>
                <Typography className="typo-text-2"> Client Id</Typography>
                <Typography className="typo-text-3">IA-12345 </Typography>
              </div>
              <div>
                <Typography className="typo-text-2"> Client Id</Typography>
                <Typography className="typo-text-3">IA-12345 </Typography>
              </div>
              <div>
                <Typography className="typo-text-2"> Client Id</Typography>
                <Typography className="typo-text-3">IA-12345 </Typography>
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
                <Typography className="typo-text-2"> Client Id</Typography>
                <Typography className="typo-text-3">IA-12345 </Typography>
              </div>
              <div>
                <Typography className="typo-text-2"> Client Id</Typography>
                <Typography className="typo-text-3">IA-12345 </Typography>
              </div>
              <div>
                <Typography className="typo-text-2"> Client Id</Typography>
                <Typography className="typo-text-3">IA-12345 </Typography>
              </div>
              <div>
                <Typography className="typo-text-2"> Client Id</Typography>
                <Typography className="typo-text-3">IA-12345 </Typography>
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
    </div>
  );
}
