/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/embedded-ai-iot-product-engineer-course-internship-bangalore',
        destination: '/embedded-ai-iot-product-engineer-course-internship-bangalore/index.html',
      },
      {
        source: '/generative-ai-product-engineer-course-internship-bangalore',
        destination: '/generative-ai-product-engineer-course-internship-bangalore/index.html',
      },
      {
        source: '/full-stack-product-development-internship-course-in-bangalore',
        destination: '/full-stack-product-development-internship-course-in-bangalore/index.html',
      },
    ];
  },
  async redirects() {
    return [
      // www → non-www canonicalization
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.knowxindia.com',
          },
        ],
        destination: 'https://knowxindia.com/:path*',
        permanent: true,
      },
      // Old course page URLs → New course page URLs
      {
        source: '/embedded-ai-iot-product-engineer',
        destination: '/embedded-ai-iot-product-engineer-course-internship-bangalore',
        permanent: true,
      },
      {
        source: '/embedded-ai-iot-product-engineer-course-bangalore',
        destination: '/embedded-ai-iot-product-engineer-course-internship-bangalore',
        permanent: true,
      },
      {
        source: '/knowx-genai-landing-v5',
        destination: '/generative-ai-product-engineer-course-internship-bangalore',
        permanent: true,
      },
      {
        source: '/generative-ai-product-engineer-course-bangalore',
        destination: '/generative-ai-product-engineer-course-internship-bangalore',
        permanent: true,
      },
      {
        source: '/full-stack-product-engineer-course-bangalore',
        destination: '/full-stack-product-development-internship-course-in-bangalore',
        permanent: true,
      },
      // Old PHP URLs → New Next.js URLs
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about-us.php',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact.php',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/iot.php',
        destination: '/iot-product-development-company-bangalore',
        permanent: true,
      },
      {
        source: '/iot-product-development-company-bangalore.php',
        destination: '/iot-product-development-company-bangalore',
        permanent: true,
      },
      {
        source: '/embedded-system-and-product-engineering.php',
        destination: '/embedded-system-design-software-development-bangalore',
        permanent: true,
      },
      {
        source: '/embedded-software-development.php',
        destination: '/embedded-system-design-software-development-bangalore',
        permanent: true,
      },
      {
        source: '/embedded-product-engineering.php',
        destination: '/embedded-system-design-software-development-bangalore',
        permanent: true,
      },
      {
        source: '/services.php',
        destination: '/#services',
        permanent: true,
      },
      {
        source: '/hardware-and-pcb-designing.php',
        destination: '/embedded-system-design-software-development-bangalore',
        permanent: true,
      },
      {
        source: '/career.php',
        destination: '/',
        permanent: true,
      },
      // Specific internship redirects to matching course pages
      {
        source: '/internships-in-bangalore/python-full-stack-development',
        destination: '/full-stack-product-development-internship-course-in-bangalore',
        permanent: true,
      },
      {
        source: '/internships-in-bangalore/python-full-stack-development/:path*',
        destination: '/full-stack-product-development-internship-course-in-bangalore',
        permanent: true,
      },
      {
        source: '/internships-in-bangalore/java-full-stack-development',
        destination: '/full-stack-product-development-internship-course-in-bangalore',
        permanent: true,
      },
      {
        source: '/internships-in-bangalore/java-full-stack-development/:path*',
        destination: '/full-stack-product-development-internship-course-in-bangalore',
        permanent: true,
      },
      {
        source: '/internships-in-bangalore/embedded-systems-training-in-bangalore-with-placement',
        destination: '/embedded-ai-iot-product-engineer-course-internship-bangalore',
        permanent: true,
      },
      {
        source: '/internships-in-bangalore/embedded-systems-training-in-bangalore-with-placement/:path*',
        destination: '/embedded-ai-iot-product-engineer-course-internship-bangalore',
        permanent: true,
      },
      {
        source: '/internships-in-bangalore/embedded-systems-iot',
        destination: '/embedded-ai-iot-product-engineer-course-internship-bangalore',
        permanent: true,
      },
      {
        source: '/internships-in-bangalore/embedded-systems-iot/:path*',
        destination: '/embedded-ai-iot-product-engineer-course-internship-bangalore',
        permanent: true,
      },
      {
        source: '/internships-in-bangalore/iot-Internet-of-things',
        destination: '/embedded-ai-iot-product-engineer-course-internship-bangalore',
        permanent: true,
      },
      {
        source: '/internships-in-bangalore/iot-Internet-of-things/:path*',
        destination: '/embedded-ai-iot-product-engineer-course-internship-bangalore',
        permanent: true,
      },
      {
        source: '/internships-in-bangalore/artificial-intelligence-and-machine-learning',
        destination: '/generative-ai-product-engineer-course-internship-bangalore',
        permanent: true,
      },
      {
        source: '/internships-in-bangalore/artificial-intelligence-and-machine-learning/:path*',
        destination: '/generative-ai-product-engineer-course-internship-bangalore',
        permanent: true,
      },
      {
        source: '/internships-in-bangalore/data-science',
        destination: '/generative-ai-product-engineer-course-internship-bangalore',
        permanent: true,
      },
      {
        source: '/internships-in-bangalore/data-science/:path*',
        destination: '/generative-ai-product-engineer-course-internship-bangalore',
        permanent: true,
      },
      {
        source: '/internships-in-bangalore/cyber-security',
        destination: '/training-internship-engineering-students-bangalore',
        permanent: true,
      },
      {
        source: '/internships-in-bangalore/cyber-security/:path*',
        destination: '/training-internship-engineering-students-bangalore',
        permanent: true,
      },
      {
        source: '/internships-in-bangalore/vlsi',
        destination: '/training-internship-engineering-students-bangalore',
        permanent: true,
      },
      {
        source: '/internships-in-bangalore/vlsi/:path*',
        destination: '/training-internship-engineering-students-bangalore',
        permanent: true,
      },
      // Generic internship catch-all (must be LAST)
      {
        source: '/internships-in-bangalore',
        destination: '/training-internship-engineering-students-bangalore',
        permanent: true,
      },
      {
        source: '/internships-in-bangalore/:path*',
        destination: '/training-internship-engineering-students-bangalore',
        permanent: true,
      },
      // Other old page redirects
      {
        source: '/staff-solutions/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/products/:path*',
        destination: '/#products',
        permanent: true,
      },
      {
        source: '/makerslab-bangalore-projects',
        destination: '/training-internship-engineering-students-bangalore',
        permanent: false,
      },
      {
        source: '/makerslab-bangalore-projects/:path*',
        destination: '/training-internship-engineering-students-bangalore',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
