
export const extractLinks = (userInput: string, aiResponse: string) => {
  const links: Array<{ text: string; url: string; isInternal?: boolean }> = [];
  
  // Only provide links if user explicitly asks for them
  const linkRequests = ['link', 'page', 'visit', 'show me', 'navigate', 'go to', 'see more', 'learn more'];
  const hasLinkRequest = linkRequests.some(request => 
    userInput.toLowerCase().includes(request) || aiResponse.toLowerCase().includes(request)
  );
  
  if (!hasLinkRequest) return links;
  
  // Check for relevant service mentions and add appropriate links
  if (userInput.toLowerCase().includes('project') || userInput.toLowerCase().includes('work') || aiResponse.toLowerCase().includes('project')) {
    links.push({ text: "View Our Projects", url: "/projects", isInternal: true });
  }
  if (userInput.toLowerCase().includes('preview') || userInput.toLowerCase().includes('demo') || aiResponse.toLowerCase().includes('preview')) {
    links.push({ text: "See Preview", url: "/preview", isInternal: true });
  }
  if (userInput.toLowerCase().includes('contact') || userInput.toLowerCase().includes('quote') || aiResponse.toLowerCase().includes('contact')) {
    links.push({ text: "Get Quote", url: "/#contact-form", isInternal: true });
  }

  return links;
};
