
SRCS := $(wildcard week*.md)
PPTX := $(addprefix pptx/,$(SRCS:.md=.pptx))
PDF  := $(addprefix pdf/,$(SRCS:.md=.pdf))
DEPS := custom-reference.pptx

.PHONY: all print

all: $(PPTX) $(PDF)

clean:
	$(RM) $(PPTX)
	$(RM) $(PDF)

pptx/%.pptx : %.md $(DEPS)
	pandoc $< -o $@ --reference-doc=custom-reference.pptx

pdf/%.pdf : %.md
	pandoc -s $< -o $@