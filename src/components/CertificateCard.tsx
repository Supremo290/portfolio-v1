import { motion } from "framer-motion";
import { FiEye, FiDownload, FiAward } from "react-icons/fi";
import type { Certificate } from "../types";

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
}

function CertificateCard({ certificate, index }: CertificateCardProps) {
  return (
    <motion.div
      className="glass-card rounded-2xl overflow-hidden group"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
    >
      <div className="overflow-hidden h-48 bg-navy-900">
        <img
          src={certificate.image}
          alt={`${certificate.title} certificate preview`}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start gap-3 mb-3">
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-primary-600/20 text-glow-300 shrink-0">
            <FiAward size={16} />
          </span>
          <div>
            <h3 className="text-lg font-semibold text-white leading-snug">
              {certificate.title}
            </h3>
            <p className="text-sm text-glow-300">{certificate.issuer}</p>
          </div>
        </div>

        {certificate.issueDate && (
          <p className="text-xs text-slate-400 mb-5">
            Issued {certificate.issueDate}
          </p>
        )}

        <div className="flex flex-wrap gap-3">
          <motion.a
            href={certificate.viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-primary-600 text-white shadow-glow hover:bg-primary-900 hover:shadow-glow-lg transition-all duration-300"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
          >
            <FiEye size={14} /> View Certificate
          </motion.a>
          <motion.a
            href={certificate.downloadUrl}
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-glow-400/40 text-glow-300 hover:bg-glow-400/10 hover:shadow-glow transition-all duration-300"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
          >
            <FiDownload size={14} /> Download
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default CertificateCard;
