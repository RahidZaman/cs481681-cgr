
SRCS := $(wildcard *.md)
PDF  := $(addprefix pdf/,$(SRCS:.md=.pdf))
DEPS := custom-latex.tex

.PHONY: all print

all: $(PDF)

clean:
	$(RM) $(PPTX)
	$(RM) $(PDF)

pptx/%.pptx : %.md $(DEPS)
	pandoc $< -o $@ --reference-doc=custom-reference.pptx

pdf/%.pdf : %.md
	pandoc -s $< -o $@
