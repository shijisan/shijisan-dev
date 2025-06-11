"use client";

import { auth } from "@/utils/firebase";
import { useRouter } from "next/navigation";
import { useEffect, useState, FormEvent } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import Link from "next/link";
import { DashboardData } from "@/types/dashboardData";

export default function Dashboard() {
	const [user, setUser] = useState<User | null>(null);
	const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
	const [status, setStatus] = useState("");
	const [work, setWork] = useState("");
	const [loading, setLoading] = useState(true);

	const router = useRouter();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
				router.push("/auth");
			}
			setLoading(false);
		});

		return () => unsubscribe();
	}, [router]);

	useEffect(() => {
		fetchDashboardData();
	}, []);

	const fetchDashboardData = async () => {
		try {
			const res = await fetch("/api/dashboard");
			const data = await res.json();
			console.log(data);
			setDashboardData(data);


			if (data) {
				setStatus(data.status || "");
				setWork(data.work || "");
			}
		} catch (err) {
			console.error("Failed to fetch dashboard data", err);
		}
	};

	const handleSignout = async () => {
		await signOut(auth);
		router.push("/");
	};

	const handleSaveData = async (e: FormEvent) => {
		e.preventDefault();
		try {
			const res = await fetch("/api/dashboard", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					status,
					work,
				}),
			});

			const data = await res.json();
			setDashboardData(data);
		} catch (err) {
			console.error("Failed to update dashboard data", err);
		}
	};

	if (loading) {
		return (
			<main className="min-h-screen w-full flex items-center justify-center bg-white">
				<p>Loading...</p>
			</main>
		);
	}

	return (
		<main className="min-h-screen w-full flex flex-col items-center justify-center gap-4 bg-white">
			<p>Welcome, {user?.displayName || "Unknown User"} 👋</p>
			<Link className="btn bg-blue-500" href="/">Home</Link>
			<button
				className="btn bg-red-500 btn"
				onClick={handleSignout}
			>
				Sign-out
			</button>

			<form onSubmit={handleSaveData} className="flex flex-col gap-2">
				<select
					name="status"
					value={status}
					onChange={(e) => setStatus(e.target.value)}
					className="p-2 border rounded"
				>
					<option value="">-- Select Status --</option>
					<option value="Open to work">Open to work</option>
					<option value="Employed">Employed</option>
				</select>

				<input
					type="text"
					name="work"
					value={work}
					onChange={(e) => setWork(e.target.value)}
					placeholder="Working at"
					className="p-2 border rounded"
				/>

				<button type="submit" className="bg-green-500 btn">
					Save
				</button>
			</form>
		</main>
	);
}
