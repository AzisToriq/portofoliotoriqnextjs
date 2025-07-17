export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Experience",
	},
	{
		id: "works",
		title: "Projects",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "UI/UX Designer",
		icon: "/backend.webp",
	},
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "App Developer",
		icon: "/mobile.webp",
	},
	{
		title: "Software Engineer",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Python",
		icon: "/tech/python.png",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "figma",
		icon: "/tech/figma.webp",
	},
	{
		name: "wordpress",
		icon: "/tech/wordpress.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
];

const experiences = [
	{
		title: "Anggota Divisi Kominfo",
		company_name: "UKM Kewirausahaan",
		icon: "/company/UKMK.png",	
		iconBg: "#383E56",
		date: "Januari 2023 - Februari 2024",
		points: [
			"Sebagai anggota divisi Kominfo di UKM Kewirausahaan, saya bertanggung jawab dalam mendukung komunikasi digital dan publikasi kegiatan kewirausahaan kampus.Peran saya mencakup pembuatan konten visual dan informasi untuk media sosial, dokumentasi acara, serta membantu pengelolaan sistem informasi internal. Selain itu, saya juga terlibat dalam kolaborasi tim lintas divisi untuk mempromosikan kegiatan, pelatihan bisnis, dan program inkubasi usaha mahasiswa.",
		],
	},
	{
		title: "Anggota Bidang SPM",
		company_name: "Ikatan Muhammadiyah Semarang",
		icon: "/company/IMM.png",
		iconBg: "#E6DEDD",
		date: "Januari 2023 - Februari 2024",
		points: [
			"Sebagai anggota bidang Sosial dan Pemberdayaan Masyarakat (SPM) di Ikatan Mahasiswa Muhammadiyah (IMM) Semarang, saya berperan aktif dalam merancang dan melaksanakan berbagai program sosial yang bertujuan untuk memberikan kontribusi langsung kepada masyarakat. Beberapa agenda yang saya ikuti antara lain kegiatan donor darah, bakti sosial di lingkungan sekitar, serta pembagian takjil selama bulan Ramadhan. Melalui peran ini, saya mengembangkan empati sosial, kemampuan koordinasi acara, serta pengalaman bekerja sama dalam tim yang berorientasi pada pelayanan masyarakat.",
		],
	},
	{
		title: "Staff Ahli Departemen Sosial Masyarakat",
		company_name: "Himpunan Mahasiswa Informatika.",
		icon: "/company/HIMAFOR.png",
		iconBg: "#E6DEDD",
		date: "Januari 2025 - Sekarang",
		points: [
			"Sebagai Staff Ahli di Departemen Sosial dan Masyarakat (SOSMAS) Himpunan Mahasiswa Informatika (HIMAFOR), saya berperan dalam memberikan masukan strategis dan evaluatif terhadap berbagai program kerja sosial yang dijalankan oleh departemen. Saya turut mendampingi pelaksanaan kegiatan seperti donasi, edukasi masyarakat, dan pengabdian berbasis teknologi. Pengalaman ini memperkuat kemampuan saya dalam berpikir analitis, bekerja lintas divisi, serta menciptakan solusi yang berdampak bagi masyarakat melalui pendekatan kolaboratif dan humanis.",
		],
	},
];

const testimonials = [
	{
		id: 1,
		testimonial:
			"media visual untuk mendokumentasikan karya, membagikan proses kreatif, serta membangun koneksi personal dengan audiens. Fokus pada keseimbangan antara estetika, storytelling, dan branding.",
		name: "zistoriqm",
		image: "/socialmedia/instagram.jpg",
		link: "https://www.instagram.com/zistoriqm/",
	},
	{
		id: 2,
		testimonial:
			"platform utama untuk membangun jaringan profesional, berbagi insight industri, serta mendokumentasikan perjalanan akademik dan karier saya. Saya aktif mengikuti perkembangan teknologi dan berdiskusi dengan komunitas profesional.",
		name: "Azis Toriq Maulana",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/azis-toriq-maulana-21b397282/",
	},
	{
		id: 3,
		testimonial:
			"sebagai platform berbagi proses kreatif, konten edukatif ringan, dan ekspresi personal. Melalui video singkat, saya menyampaikan ide, proyek, dan insight seputar dunia teknologi, desain, serta kehidupan mahasiswa.",
		name: "zistoriqm",
		image: "/socialmedia/tiktok.webp",
		link: "https://www.tiktok.com/@zistoriqm",
	},
	{
		id: 4,
		testimonial:
			"tempat saya belajar dan berkembang sebagai developer. Saya menyimpan project kuliah, eksperimen coding, hingga web app yang sedang saya kembangkan. Semua commit adalah bagian dari perjalanan saya memahami dunia teknologi.",
		name: "Azis Toriq Maulana",
		image: "/tech/github.webp",
		link: "https://github.com/omunite215",
	},
];


const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web" | "Railway"
}[] = [
	{
		name: "Website Sederhana WordPress",
		description:
			"Membangun website sederhana menggunakan WordPress sebagai platform CMS untuk menampilkan konten informatif dengan desain clean dan navigasi intuitif.",
		tags: [
			{
				name: "wordpress",
				color: "blue-text-gradient",
			},
			{
				name: "UI/UX",
				color: "green-text-gradient",
			},
		],
		image: "/projectimg/WordPress.png",
		platform: "Wordpress",
		deploy_link: "https://toriqganteng.wordpress.com/",
	},
	{
		name: "Portofolio Dasar Sederhana",
		description:
			" Karya ini saya buat sebagai sarana untuk mengasah kemampuan pengembangan antarmuka dan logika aplikasi berbasis web. Melalui proyek ini, saya belajar menerapkan konsep yang lebih terstruktur, membangun tampilan yang responsif, serta memahami alur kerja teknologi modern secara praktis.",
		tags: [
			{
				name: "CSS",
				color: "red-text-gradient",
			},
			{
				name: "Ts",
				color: "orange-text-gradient",
			},
			{
				name: "JS",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/PortofolioToriq1.png",
		source_code_link: "https://github.com/AzisToriq/portofoliotoriq",
		platform: "Vercel",
		deploy_link: "https://portofoliotoriq.vercel.app/",
	},
	{
		name: "Peningkatan Citra X-ray",
		description:
			"Aplikasi web menggunakan Python & OpenCV untuk meningkatkan kualitas gambar X-ray dengan metode CLAHE dan deteksi tepi. Fokus pada visualisasi medis.",
		tags: [
			{
				name: "Python",
				color: "green-text-gradient",
			},
			{
				name: "Flask",
				color: "blue-text-gradient",
			},
			{
				name: "OpenCV",
				color: "orange-text-gradient",
			},
		],	
		image: "/projectimg/CitraXray.png",
		source_code_link: "https://github.com/AzisToriq/pengolahancitra",
		platform: "Railway",
		deploy_link: "https://pengolahancitradigital-toriq.up.railway.app/"
	},
	{
		name: "Web Demo Biodata & Arikel Mahasiswa",
		description:
			"Web ini dikembangkan sebagai sistem manajemen data mahasiswa dan artikel, di mana saya berperan sebagai admin. Melalui dashboard, saya dapat menambahkan dan mengatur biodata mahasiswa serta konten artikel mereka. Tujuannya sebagai latihan implementasi backend, frontend, dan alur kerja admin panel.",
		tags: [
			{
				name: "HTML&CSS",
				color: "blue-text-gradient",
			},
			{
				name: "PHP",
				color: "green-text-gradient",
			},
			{
				name: "MySQL",
				color: "orange-text-gradient",
			},
		],
		image: "/projectimg/Biodata_Artikel.png",
		source_code_link: "https://github.com/AzisToriq/Biodata-Artikel-Mahasiswa",
		platform: "Railway",
		deploy_link: "https://biodata-artikel-mahasiswa-toriq.up.railway.app/",
	},
];

export { services, technologies, experiences, testimonials, projects };
