export const profile = {
  name: "Sharon Aman",
  role: "DevOps Engineer",
  location: "Kollam, Kerala, India",
  email: "sharonaman01@gmail.com",
  phone: "+91 7034145431",
  github: "https://github.com/sharonaman",
  githubHandle: "sharonaman",
  summary:
    "I build and support reliable delivery pipelines and cloud infrastructure across Azure and AWS. My work spans CI/CD automation, infrastructure as code, container platforms, release management and production operations.",
  availability: "Open to DevOps opportunities",
};

export const metrics = [
  { value: "3+", label: "Years in DevOps roles" },
  { value: "100+", label: "Client environments supported by delivery workflows" },
  { value: "2", label: "Primary cloud platforms" },
];

export const principles = [
  {
    number: "01",
    title: "Automation first",
    description: "Reduce repetitive deployment and infrastructure tasks through pipelines and code.",
  },
  {
    number: "02",
    title: "Operational reliability",
    description: "Support stable releases, monitoring, troubleshooting and production environments.",
  },
  {
    number: "03",
    title: "End-to-end collaboration",
    description: "Coordinate with developers, QA and stakeholders across the release lifecycle.",
  },
];

export const skillGroups = [
  { title: "Cloud platforms", items: ["Microsoft Azure", "AWS", "DigitalOcean", "GCP"] },
  { title: "CI/CD & source control", items: ["Azure DevOps", "GitLab CI/CD", "GitHub Actions", "Git", "TFS"] },
  { title: "Containers & orchestration", items: ["Docker", "Kubernetes", "AKS", "EKS"] },
  { title: "Infrastructure as code", items: ["Terraform", "Ansible"] },
  { title: "Monitoring & logging", items: ["Grafana", "Prometheus", "CloudWatch", "Kibana"] },
  { title: "Build & artifacts", items: ["Maven", "Nexus3", "Azure Artifacts"] },
  { title: "Security & quality", items: ["SonarQube", "OWASP", "Trivy", "Prowler"] },
  { title: "Systems & web servers", items: ["Linux", "Windows", "IIS", "Nginx", "Apache", "JIRA"] },
];

export const experience = [
  {
    period: "NOV 2024 — PRESENT",
    location: "Kerala, India",
    role: "DevOps Engineer",
    company: "MariApps Marine Solutions",
    points: [
      "Automate and maintain Azure DevOps CI/CD pipelines supporting deployments across 100+ client environments.",
      "Manage application deployments to Windows Servers with IIS integration.",
      "Work with Dockerized workloads on Azure Kubernetes Service (AKS) and Azure Container Registry (ACR).",
      "Improve deployment consistency and operational stability through automation, monitoring and troubleshooting.",
      "Coordinate build, release and deployment activities with cross-functional teams.",
    ],
  },
  {
    period: "MAR 2023 — NOV 2024",
    location: "Kerala, India",
    role: "DevOps Engineer Level 1",
    company: "Tegain Private Limited",
    points: [
      "Worked with AWS infrastructure to improve application availability and reduce service downtime.",
      "Developed and maintained CI/CD pipelines using GitLab CI/CD and Terraform.",
      "Integrated Prometheus and Grafana for monitoring, visibility and alerting.",
      "Deployed microservices across AKS and EKS environments.",
      "Containerized Python/Django applications and supported deployments on Ubuntu systems using Docker.",
    ],
  },
];

export const projects = [
  {
    number: "01",
    category: "ENTERPRISE DELIVERY",
    cloud: "AZURE",
    title: "ERP deployment for ship management",
    description:
      "Supported ERP deployments for 100+ clients across office and vessel environments. Automated build, artifact upload and IIS deployment using Azure DevOps pipelines and Azure Release Manager, helping standardize application delivery.",
    stack: ["Azure DevOps", "Release Manager", "IIS", "Windows Server"],
    outcome: "Multi-client deployment workflows",
    details: [
      "Automated build, artifact upload and deployment steps.",
      "Supported office and vessel application delivery workflows.",
      "Worked with Azure DevOps pipelines and IIS-hosted applications.",
    ],
  },
  {
    number: "02",
    category: "MICROSERVICES",
    cloud: "AWS",
    title: "Booking application on ECS Fargate",
    description:
      "Deployed a Flask booking application composed of seven microservices. Provisioned infrastructure with Terraform and used ECR, ALB, RDS PostgreSQL, S3, CloudWatch, Kibana and Grafana across the deployment and monitoring stack.",
    stack: ["ECS Fargate", "Terraform", "ECR", "ALB", "RDS", "CloudWatch"],
    outcome: "7 microservices",
    details: [
      "Provisioned cloud resources using Terraform.",
      "Used ECR for container image storage and ECS Fargate for workloads.",
      "Integrated ALB, RDS PostgreSQL and S3 with monitoring and logging tools.",
    ],
  },
  {
    number: "03",
    category: "CONTAINER PLATFORM",
    cloud: "AZURE",
    title: "Commerce platform on AKS",
    description:
      "Deployed an e-commerce application with ten Dockerized microservices across demo and production AKS clusters. Used Terraform and Azure DevOps for CI/CD, with Prometheus and Grafana for performance monitoring.",
    stack: ["AKS", "Docker", "Terraform", "Azure DevOps", "Prometheus", "Grafana"],
    outcome: "10 microservices · 2 clusters",
    details: [
      "Deployed Dockerized microservices across demo and production clusters.",
      "Used Terraform and Azure DevOps for infrastructure and delivery workflows.",
      "Integrated Prometheus and Grafana for performance visibility.",
    ],
  },
  {
    number: "04",
    category: "JAVA APPLICATION",
    cloud: "AWS",
    title: "Boardgame Java project on EKS",
    description:
      "Deployed a Dockerized Java application using Amazon ECR for image storage and Amazon EKS for orchestration. Automated CI/CD with GitLab and Terraform and integrated SonarQube and Trivy for quality and vulnerability checks.",
    stack: ["EKS", "ECR", "GitLab CI/CD", "Terraform", "SonarQube", "Trivy"],
    outcome: "Containerized Java deployment",
    details: [
      "Built and stored container images in Amazon ECR.",
      "Orchestrated application deployment using Amazon EKS.",
      "Integrated SonarQube and Trivy into the delivery workflow.",
    ],
  },
];

export const education = [
  { degree: "Master of Science — Computer Science", institution: "University of Kerala", period: "2022–2024" },
  { degree: "Bachelor of Science — Computer Science", institution: "University of Kerala", period: "2018–2021" },
];

export const certifications = [
  "DevSecOps and Cloud DevOps · DevOpsShack · 2024",
  "Ultimate DevOps Bootcamp · Udemy · 2024",
  "GitLab CI/CD · KodeKloud · 2023",
  "GCP DevOps Project & Amazon ECS · KodeKloud · 2023",
];
