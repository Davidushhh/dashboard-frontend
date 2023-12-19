export const textFileDownload = (csvText, tableName) => {
  // Створи Blob з рядка CSV
  const blob = new Blob([csvText], { type: "text/csv" });

  // Створи URL для завантаження
  const url = window.URL.createObjectURL(blob);

  // Створи посилання для завантаження і симулюй клік
  const a = document.createElement("a");
  a.href = url;
  a.download = tableName;
  document.body.appendChild(a);
  a.click();

  // Після завантаження видали створений об'єкт URL
  window.URL.revokeObjectURL(url);
};
