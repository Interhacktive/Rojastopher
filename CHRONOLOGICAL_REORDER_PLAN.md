# Rojastopher Website - Chronological Gallery Reordering Implementation Plan

**Date:** March 20, 2026  
**Project:** Rojastopher Photography Website  
**Task:** Reorder galleries chronologically (newest to oldest)  
**Implementation Time:** Morning session

## Overview

This document provides comprehensive technical documentation for reordering the photo galleries on the Rojastopher website to display in chronological order, starting with 2025 at the top and progressing backward to 2008.

## Current State Analysis

### Gallery Structure
The website currently contains 10 gallery sections, each structured as:
```html
<div class="gallery-outer" id="[gallery-id]">
  <div class="gallery-sticky">
    <div class="gallery-track" data-gallery="[gallery-id]" data-title="[Gallery Title]">
      <!-- Image elements -->
    </div>
    <div class="gallery-info">
      <!-- Gallery metadata and progress indicators -->
    </div>
  </div>
</div>
```

### Current Gallery Order (Top to Bottom)
1. `womens-march-on-dc` - Jan 21, 2017
2. `inaugertion-day` - Jan 20, 2017  
3. `muslim-ban-protest` - Jan 29, 2017
4. `muslim-ban-protest-westlake-center` - Feb 2017
5. `occupy-wall-street` - Fall 2011
6. `iraq` - 2008
7. `dnc-2008` - August 2008
8. `george-floyd-protests` - Summer 2020
9. `2025` - 2025
10. `handmaids` - Seattle, WA (undated)

## Target State

### Chronological Order (Newest to Oldest)
1. `2025` - 2025 *(move from position 9 to 1)*
2. `handmaids` - Seattle, WA *(move from position 10 to 2)*
3. `george-floyd-protests` - Summer 2020 *(move from position 8 to 3)*
4. `womens-march-on-dc` - Jan 21, 2017 *(move from position 1 to 4)*
5. `inaugertion-day` - Jan 20, 2017 *(move from position 2 to 5)*
6. `muslim-ban-protest` - Jan 29, 2017 *(move from position 3 to 6)*
7. `muslim-ban-protest-westlake-center` - Feb 2017 *(move from position 4 to 7)*
8. `occupy-wall-street` - Fall 2011 *(move from position 5 to 8)*
9. `dnc-2008` - August 2008 *(move from position 7 to 9)*
10. `iraq` - 2008 *(move from position 6 to 10)*

## Implementation Phases

### Phase 1: HTML Structure Reordering

#### 1.1 Move 2025 Gallery to Top Position
**Location:** After hero section, before first gallery
**Action:** Cut and paste entire `<div class="gallery-outer" id="2025">` block
**New Position:** Line ~100 (after hero section)

#### 1.2 Move Handmaids Gallery to Second Position  
**Location:** After 2025 gallery
**Action:** Cut and paste entire `<div class="gallery-outer" id="handmaids">` block
**New Position:** Line ~200 (after 2025 gallery)

#### 1.3 Move George Floyd Protests Gallery to Third Position
**Location:** After Handmaids gallery
**Action:** Cut and paste entire `<div class="gallery-outer" id="george-floyd-protests">` block
**New Position:** Line ~300 (after Handmaids gallery)

#### 1.4 Reorder Remaining Galleries Chronologically
**Sequence:** Women's March → Inauguration Day → Muslim Ban SeaTac → Muslim Ban Westlake → Occupy Wall Street → DNC 2008 → Iraq

#### 1.5 Update Section Numbering
**Current Pattern:** 01, 02, 03, 04, 05, 06, 07, 08, 09, 10
**New Pattern:** 
- 2025: 01
- Handmaids: 02  
- George Floyd: 03
- Women's March: 04
- Inauguration: 05
- Muslim Ban SeaTac: 06
- Muslim Ban Westlake: 07
- Occupy Wall Street: 08
- DNC 2008: 09
- Iraq: 10

**Files to Modify:** `index.html`

### Phase 2: Sidebar Navigation Update

#### 2.1 Update Navigation Order
**Location:** `<nav class="sidebar-nav" id="sidebarNav">`
**Action:** Reorder `<li>` elements to match new gallery sequence

#### 2.2 Update Navigation Numbers
**Pattern:** Update `<span class="nav-num">` elements to reflect new chronological order

#### 2.3 Verify Data Attributes
**Check:** Ensure `data-section` attributes correspond to correct gallery IDs

**Files to Modify:** `index.html`

### Phase 3: CSS and JavaScript Verification

#### 3.1 CSS Verification
**Check:** No CSS changes required - existing styles are gallery-agnostic
**Verification:** Confirm `.gallery-outer` and `.gallery-sticky` styles remain effective

#### 3.2 JavaScript Verification  
**Check:** No JavaScript changes required - existing code uses gallery IDs, not positions
**Verification:** Confirm gallery functionality (scroll, lightbox, progress bars) remains intact

### Phase 4: Testing and Validation

#### 4.1 Desktop Testing
- [ ] Verify all galleries are accessible via sidebar navigation
- [ ] Test scroll-driven horizontal pan functionality
- [ ] Confirm gallery info bars display correctly
- [ ] Test lightbox functionality for all galleries
- [ ] Verify hero slideshow remains functional

#### 4.2 Mobile Testing
- [ ] Test responsive navigation (horizontal scroll)
- [ ] Verify gallery functionality on mobile devices
- [ ] Confirm touch interactions work correctly

#### 4.3 Cross-Browser Testing
- [ ] Test in Chrome, Firefox, Safari, Edge
- [ ] Verify consistent behavior across browsers

#### 4.4 Accessibility Testing
- [ ] Confirm keyboard navigation works
- [ ] Verify screen reader compatibility
- [ ] Test focus indicators and ARIA labels

## Technical Implementation Details

### HTML Structure Changes

#### Before (Current Order):
```html
<!-- Hero Section -->
<section class="hero">...</section>

<!-- Gallery 1: Women's March -->
<div class="gallery-outer" id="womens-march-on-dc">...</div>

<!-- Gallery 2: Inauguration Day -->  
<div class="gallery-outer" id="inaugertion-day">...</div>

<!-- ... other galleries ... -->

<!-- Gallery 9: 2025 -->
<div class="gallery-outer" id="2025">...</div>

<!-- Gallery 10: Handmaids -->
<div class="gallery-outer" id="handmaids">...</div>
```

#### After (Chronological Order):
```html
<!-- Hero Section -->
<section class="hero">...</section>

<!-- Gallery 1: 2025 -->
<div class="gallery-outer" id="2025">...</div>

<!-- Gallery 2: Handmaids -->
<div class="gallery-outer" id="handmaids">...</div>

<!-- Gallery 3: George Floyd -->
<div class="gallery-outer" id="george-floyd-protests">...</div>

<!-- Gallery 4: Women's March -->
<div class="gallery-outer" id="womens-march-on-dc">...</div>

<!-- ... remaining galleries in chronological order ... -->
```

### Sidebar Navigation Changes

#### Before (Current Order):
```html
<nav class="sidebar-nav" id="sidebarNav">
  <ul>
    <li><a href="#womens-march-on-dc" data-section="womens-march-on-dc"><span class="nav-num">01</span>Women's March D.C.</a></li>
    <li><a href="#inaugertion-day" data-section="inaugertion-day"><span class="nav-num">02</span>Inauguration Day</a></li>
    <!-- ... other items ... -->
    <li><a href="#2025" data-section="2025"><span class="nav-num">09</span>2025</a></li>
    <li><a href="#handmaids" data-section="handmaids"><span class="nav-num">10</span>Handmaids</a></li>
  </ul>
</nav>
```

#### After (Chronological Order):
```html
<nav class="sidebar-nav" id="sidebarNav">
  <ul>
    <li><a href="#2025" data-section="2025"><span class="nav-num">01</span>2025</a></li>
    <li><a href="#handmaids" data-section="handmaids"><span class="nav-num">02</span>Handmaids</a></li>
    <li><a href="#george-floyd-protests" data-section="george-floyd-protests"><span class="nav-num">03</span>George Floyd</a></li>
    <li><a href="#womens-march-on-dc" data-section="womens-march-on-dc"><span class="nav-num">04</span>Women's March D.C.</a></li>
    <!-- ... remaining items in chronological order ... -->
  </ul>
</nav>
```

## Risk Assessment

### Low Risk
- **HTML reordering:** Straightforward cut-and-paste operation
- **Navigation updates:** Simple reordering of existing elements
- **CSS/JS impact:** Minimal - existing code is position-agnostic

### Mitigation Strategies
- **Backup:** Create backup of original `index.html` before changes
- **Incremental testing:** Test each gallery after reordering
- **Version control:** Commit changes after each phase

## Success Criteria

### Functional Requirements
- [ ] All galleries accessible in new chronological order
- [ ] Sidebar navigation reflects new order
- [ ] All gallery functionality preserved (scroll, lightbox, progress)
- [ ] Website loads and renders correctly
- [ ] Mobile responsiveness maintained

### User Experience Requirements  
- [ ] Clear chronological narrative flow
- [ ] Intuitive navigation experience
- [ ] No broken links or missing functionality
- [ ] Consistent visual presentation

## Implementation Timeline

**Estimated Duration:** 30-45 minutes

### Phase 1: HTML Reordering (15 minutes)
- Move gallery sections to new positions
- Update section numbering
- Verify HTML structure

### Phase 2: Navigation Update (10 minutes)  
- Reorder sidebar navigation items
- Update navigation numbers
- Verify data attributes

### Phase 3: Testing (15-20 minutes)
- Desktop functionality testing
- Mobile responsiveness testing
- Cross-browser verification
- Accessibility validation

## Post-Implementation Checklist

- [ ] Backup original files
- [ ] Test all gallery functionality
- [ ] Verify mobile responsiveness
- [ ] Check cross-browser compatibility
- [ ] Validate accessibility features
- [ ] Confirm no broken links or errors
- [ ] Review visual presentation
- [ ] Document any issues or adjustments needed

## Rollback Plan

If issues arise during implementation:

1. **Restore backup:** Replace modified `index.html` with original backup
2. **Verify functionality:** Confirm original behavior is restored
3. **Identify issues:** Document what caused the problem
4. **Plan correction:** Adjust approach based on identified issues
5. **Re-attempt:** Implement with corrected approach

## Notes

- This implementation maintains all existing functionality while improving user experience through chronological organization
- No changes to image assets or directory structure required
- JavaScript functionality is preserved as it uses gallery IDs rather than positions
- CSS styles remain effective as they are gallery-agnostic
- The change enhances the narrative flow of the photographer's 17-year documentation