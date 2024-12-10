export async function uploadFile(file: File | null): Promise<string | null> {
  if (!file) return null;

  // TODO: 实现实际的文件上传逻辑
  // 这里暂时返回一个模拟的URL
  return `https://storage.example.com/${file.name}`;
} 