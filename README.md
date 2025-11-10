# Postman API Automation Integration with GitHub Actions

This repository is a demonstration POC for integrating **Postman tests** with **GitHub Actions**.  
The tests are written in **Postman** and executed on a **VM** using **Newman** and **newman-reporter-htmlextra**.  
GitHub Actions triggers the project execution on every push to the **main branch**, and it can also be triggered manually using **workflow_dispatch**.  
Additionally, the project is scheduled to run automatically using a **cron job**.

The **HTML report** is archived and available in the **Artifacts** section for the team to download.  
You can also view the latest report directly from the GitHub Pages site:  
👉 [https://virajkolekar.github.io/Phoenix-Inwarranty-Flow/](https://virajkolekar.github.io/Phoenix-Inwarranty-Flow/)  
The latest report is also emailed to team members using **Gmail SMTP**.

---

## 👨‍💻 About Me

Hi, my name is **Viraj Kolekar**.  
I have **10 years of experience** in **Manual and Automation Testing**, currently working as a **Test Lead** at **Cirrius Technologies** in Mumbai.  

My skillset includes:  
- **UI Automation:** Selenium WebDriver (Java), Cypress, Playwright  
- **API Testing:** Rest Assured, Postman  
- **CI/CD & DevOps:** Jenkins, GitHub Actions, Maven  
- **Version Control:** Git, GitHub  

📫 You can connect with me on [LinkedIn](https://www.linkedin.com/in/virajkolekar/)

---

## ✅ Testing Coverage

- Happy Flow Testing  
- Negative Testing and Edge Case Testing  
- Token Validation  
- Data-Driven Testing using CSV  
- Schema Validation  
- Secrets Management using GitHub Secrets  

---

## 🧰 Tech Stack

- Postman  
- Node.js v22  
- Newman  
- newman-reporter-htmlextra  
- GitHub Actions  
- Gmail SMTP  
- GitHub Pages  
- CSV for Data-Driven Testing  
- AWS EC2 (Self-hosted GitHub Runner)  

---

## 🌐 GitHub Pages

You can directly view the latest test report of the Postman Test here:  
👉 [https://virajkolekar.github.io/Phoenix-Inwarranty-Flow/](https://virajkolekar.github.io/Phoenix-Inwarranty-Flow/)

---

## 📊 HTML Report

The HTML report is generated under the folder:  

![Postman Report](https://github.com/VIRAJK-dev/Phoenix-Inwarranty-Flow/blob/static-report/newman-report.png)
```
/newman/Postman Report
```

---

## 📁 Project Structure

```bash
Phoenix Inwarranty Flow
├─ Inwarranty-flow Collection.postman_collection.json   # Collection File
├─ QA.postman_environment.json                          # Environment File
└─ testdata.csv                                         # Test Data File
```

---

## ⚙️ How to Run the Project

You can run the project on your local system by following these steps:

1. **Clone the Project on Local System:**  
   ```bash
   git clone https://github.com/virajkolekar/Phoenix-Inwarranty-Flow.git
   ```

2. **Install Node.js and NPM:**  
   Download and install from [https://nodejs.org/en](https://nodejs.org/en)

3. **Install Newman:**  
   ```bash
   npm install -g newman
   ```

4. **Install newman-reporter-htmlextra:**  
   ```bash
   npm install -g newman-reporter-htmlextra
   ```

5. **Run the Newman Command:**  
   ```bash
   newman run 'Inwarranty-flow Collection.postman_collection.json'      -e QA.postman_environment.json      -d testdata.csv      -r cli,htmlextra      --reporter-htmlextra-export ./newman/index.html
   ```

---

✨ **This project demonstrates how Postman API tests can be automated, reported, and integrated seamlessly into CI/CD pipelines using GitHub Actions.**
