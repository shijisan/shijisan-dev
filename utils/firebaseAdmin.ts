// utils/firebaseAdmin.ts
import { getApps, getApp, initializeApp, cert } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore } from 'firebase-admin/firestore'

const serviceAccount = {
  projectId: 'shijisan-dev',
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
}

const adminApp = getApps().length
  ? getApp()
  : initializeApp({
      credential: cert(serviceAccount),
    })

export const adminAuth = getAuth(adminApp)
export const adminDb = getFirestore(adminApp);