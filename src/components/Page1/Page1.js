import React from "react";
import "./Page1.css";
import "../font/Chillax.css";
import Check from "../assets/iconcheckmark.png";
import Drop from "../assets/drop.png";
import Banner from "../assets/saas-concept-collage 1.png"

const Page1 = () => {
  return (
    <div>
      <img src={Banner} alt="" className="banner"/>
      <p className="heading">Pick Your Perfect Plan</p>
      <p className="heading2">
        Get started in complete confidence. Our 30-day money back guarantee
        means it's risk-free.
      </p>
      <div class="container ">
        <div class="row">
          <div class="col">
            <div class="col-content">
              <p className="plan-heading">Single</p>
              <p className="plan-text1">A great solution for beginners</p>
              <div className="plan-container">
                <p className="plan-text">₹399.00</p>
                <p className="save-text">SAVE 82%</p>
              </div>
              <div className="plan-container1">
                <p className="plan-text">₹</p>
                <p className="price">69.00</p>
                <p className="plan-text">/mo</p>
              </div>
              <button className="button">Choose Plan</button>
              <p className="plan-text">₹179.00/mo when you renew</p>

              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">1 Website</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet"> ~10 000 Visits Monthly</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">50 GB NVMe Storage</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">
                  200 000 Files And Directories (inodes)
                </div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Free Pre-Built Templates</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">
                  Free Automatic Website Migration
                </div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Unlimited Free SSL</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">1 Email Account</div>
              </div>
              <p className="plan-heading2">Managed WordPress</p>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">
                  Free 1-Click WordPress Installation
                </div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">
                  {" "}
                  Free Automatic Website Migration
                </div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Free Pre-Built Templates</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">
                  WordPress Acceleration (LiteSpeed)
                </div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">WordPress Auto Updates</div>
              </div>
              <div className="dropdown">
                <div className="plan-heading2">AI Content Creator</div>
                <div className="drop">
                  <img src={Drop} alt="drop-icon" className="drop-icon" />
                </div>
              </div>
              <div className="dropdown">
                <div className="plan-heading2">Hostinger Website Builder</div>
                <div className="drop">
                  <img src={Drop} alt="drop-icon" className="drop-icon" />
                </div>
              </div>
              <div className="dropdown">
                <div className="plan-heading2">Security</div>
                <div className="drop">
                  <img src={Drop} alt="drop-icon" className="drop-icon" />
                </div>
              </div>
              <div className="dropdown">
                <div className="plan-heading2">Service and Support</div>
                <div className="drop">
                  <img src={Drop} alt="drop-icon" className="drop-icon" />
                </div>
              </div>
              <div className="dropdown">
                <div className="plan-heading2">Technical Details</div>
                <div className="drop">
                  <img src={Drop} alt="drop-icon" className="drop-icon" />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="col-content">
              <p className="plan-heading">Premium</p>
              <p className="plan-text">
                Everything you need to create your website
              </p>
              <div className="plan-container">
                <p className="plan-text">₹599.00</p>
                <p className="save-text">SAVE 78%</p>
              </div>
              <div className="plan-container">
                <p className="plan-text">₹</p>
                <p className="price">129.00</p>
                <p className="plan-text">/mo</p>
              </div>
              <p className="validity">3 months free</p>
              <button className="button">Choose Plan</button>
              <p className="plan-text">₹249.00/mo when you renew</p>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">100 Websites</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">~25 000 Visits Monthly</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">100 GB NVMe Storage</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">
                  400 000 Files And Directories (inodes)
                </div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Free Pre-Built Templates</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">
                  Free Automatic Website Migration
                </div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Unlimited Free SSL</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Free Email</div>
              </div>
              <p className="plan-heading2">Managed WordPress</p>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">
                  Free 1-Click WordPress Installation
                </div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">
                  Free Automatic Website Migration
                </div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Free Pre-Built Templates</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">
                  WordPress Acceleration (LiteSpeed)
                </div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">WordPress Auto Updates</div>
              </div>
              <p className="plan-heading2">Hostinger Website Builder</p>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">AI Website Builder</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Drag&Drop Editor</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">150 Templates</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Marketing Integrations</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">AI Image Generator</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">AI Writer</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">AI Blog Generator</div>
              </div>
              <p className="plan-heading2">Security</p>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Standard DDoS Protection</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Web Application Firewall</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">
                  Cloudflare Protected Nameservers
                </div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Malware Scanner</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Secure Access Manager</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">
                  Free Domain WHOIS Privacy Protection (₹749.00 Value)
                </div>
              </div>
              <p className="plan-heading2">Security</p>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">30-Day Money-Back Guarantee</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">99.9% Uptime Guarantee</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Global Data Centers</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">24/7 Customer Support</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Priority Support</div>
              </div>
              <p className="plan-heading2">Technical Details</p>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">
                  200 000 Files And Directories (inodes)
                </div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">25 PHP Workers</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">~10 000 Visits Monthly</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">2 Subdomains</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">25 MySQL Max User Connections</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">2 Databases</div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="col-content">
              <p className="plan-heading">Business</p>
              <p className="plan-text">
                Level-up with more power and enhanced features
              </p>
              <div className="plan-container">
                <p className="plan-text">₹699.00</p>
                <p className="save-text">SAVE 64%</p>
              </div>
              <div className="plan-container">
                <p className="plan-text">₹</p>
                <p className="price">249.00</p>
                <p className="plan-text">/mo</p>
              </div>
              <p className="validity">3 months free</p>
              <button className="button">Choose Plan</button>
              <p className="plan-text">₹499.00/mo when you renew</p>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">100 Websites</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">~25 000 Visits Monthly</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">200 GB NVMe Storage</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">
                  600 000 Files And Directories (inodes)
                </div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Free Pre-Built Templates</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">
                  Free Automatic Website Migration
                </div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Unlimited Free SSL</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Free Email</div>
              </div>
              <p className="plan-heading2">Managed WordPress</p>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">
                  Free 1-Click WordPress Installation
                </div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">
                  Free Automatic Website Migration
                </div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Free Pre-Built Templates</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">
                  WordPress Acceleration (LiteSpeed)
                </div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">WordPress Auto Updates</div>
              </div>
              <p className="plan-heading2">Hostinger Website Builder</p>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">AI Website Builder</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Drag&Drop Editor</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">150 Templates</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Marketing Integrations</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">AI Image Generator</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">AI Writer</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">AI Blog Generator</div>
              </div>
              <p className="plan-heading2">Security</p>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Enhanced DDoS Protection</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Web Application Firewall</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">
                  Cloudflare Protected Nameservers
                </div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Malware Scanner</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Secure Access Manager</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">
                  Free Domain WHOIS Privacy Protection (₹749.00 Value)
                </div>
              </div>
              <p className="plan-heading2">Security</p>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">30-Day Money-Back Guarantee</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">99.9% Uptime Guarantee</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Global Data Centers</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">24/7 Customer Support</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Priority Support</div>
              </div>
              <p className="plan-heading2">Technical Details</p>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">
                  600 000 Files And Directories (inodes)
                </div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">60 PHP Workers</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">~10 000 Visits Monthly</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">100 Subdomains</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">75 MySQL Max User Connections</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Unlimited Databases</div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="col-content">
              <p className="plan-heading">Cloud Startup</p>
              <p className="plan-text">
                Enjoy optimised performance & guaranteed resources
              </p>
              <div className="plan-container">
                <p className="plan-text">₹1699.00</p>
                <p className="save-text">SAVE 58%</p>
              </div>
              <div className="plan-container">
                <p className="plan-text">₹</p>
                <p className="price">699.00</p>
                <p className="plan-text">/mo</p>
              </div>
              <p className="validity">3 months free</p>
              <button className="button">Choose Plan</button>
              <p className="plan-text">₹1279.00/mo when you renew</p>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">300 Websites</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">~20 000 Visits Monthly</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">200 GB NVMe Storage</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">
                  200 000 Files And Directories (inodes)
                </div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Free Pre-Built Templates</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">
                  Free Automatic Website Migration
                </div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Unlimited Free SSL</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Free Email</div>
              </div>
              <p className="plan-heading2">Managed WordPress</p>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">
                  Free 1-Click WordPress Installation
                </div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">
                  Free Automatic Website Migration
                </div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Free Pre-Built Templates</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">
                  WordPress Acceleration (LiteSpeed)
                </div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">WordPress Auto Updates</div>
              </div>
              <p className="plan-heading2">Hostinger Website Builder</p>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">AI Website Builder</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Drag&Drop Editor</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">150 Templates</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Marketing Integrations</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">AI Image Generator</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">AI Writer</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">AI Blog Generator</div>
              </div>
              <p className="plan-heading2">Security</p>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Enhanced DDoS Protection</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Web Application Firewall</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">
                  Cloudflare Protected Nameservers
                </div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Malware Scanner</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Secure Access Manager</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">
                  Free Domain WHOIS Privacy Protection (₹749.00 Value)
                </div>
              </div>
              <p className="plan-heading2">Security</p>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">30-Day Money-Back Guarantee</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">99.9% Uptime Guarantee</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Global Data Centers</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">24/7 Customer Support</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Priority Support</div>
              </div>
              <p className="plan-heading2">Technical Details</p>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">
                  200 000 Files And Directories (inodes)
                </div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">100 PHP Workers</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">~20 000 Visits Monthly</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">300 Subdomains</div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">
                  100 MySQL Max User Connections
                </div>
              </div>
              <div className="bullet-point">
                <div>
                  <img src={Check} alt="Checkmark" className="checkmark" />
                </div>
                <div className="plan-bullet">Unlimited Databases</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
